# Database Setup Instructions

## PostgreSQL Setup with Prisma

This project uses PostgreSQL with Prisma ORM for the contact form submissions.

### Environment Variables

Create a `.env` file in the root directory with the following content:

```
DATABASE_URL="postgresql://username:password@localhost:5432/xcripter?schema=public"
```

Replace `username` and `password` with your PostgreSQL credentials.

### Database Setup

1. Make sure PostgreSQL is installed and running on your system.
2. Create a new database named `xcripter`:

```bash
createdb xcripter
```

3. Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev --name init
```

4. Generate the Prisma client:

```bash
npx prisma generate
```

### Testing the Database Connection

You can verify the database connection by running:

```bash
npx prisma studio
```

This will open a web interface where you can view and manage your database.

### Contact Form Submissions

The contact form submissions are stored in the `contact_submissions` table with the following fields:
- id (auto-incremented)
- name
- email
- subject
- message
- created_at (timestamp)
