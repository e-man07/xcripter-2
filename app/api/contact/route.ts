import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as z from 'zod'

// Define the validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    
    // Validate the input data
    const validatedData = contactFormSchema.parse(body)
    
    // Store the submission in the database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    })
    
    // Return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: submission.id 
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    
    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        message: 'Validation error', 
        errors: error.errors 
      }, { status: 400 })
    }
    
    // Return a generic error response
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process contact form submission' 
    }, { status: 500 })
  }
}
