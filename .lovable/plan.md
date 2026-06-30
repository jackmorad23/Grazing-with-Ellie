## Goal

Make the inquiry form fully free to run by removing the database write and relying entirely on the user's own email client to send the inquiry to Ellie.

## What changes

In `src/routes/index.tsx`, `Contact` component (`onSubmit`):

1. **Remove the Supabase insert** into the `inquiries` table. No more database writes = no Cloud credits used on form submissions.
2. **Keep the existing mailto flow** that opens the user's email client (Gmail, Apple Mail, Outlook) pre-filled with all the form details (name, email, phone, event date, guests, budget, board type, message).
3. **Update the success message** so it's clear the user must press Send in their email app to actually deliver the inquiry — e.g. "Your email draft is open — press Send to deliver it to Ellie."
4. **Update the error fallback** since there's no longer a network call that can fail; only a fallback if `window.open` is blocked.
5. Remove the now-unused `supabase` import if nothing else in the file uses it.

## What stays the same

- Form fields, validation, and styling — unchanged.
- The `mailto:grazingwithellie@gmail.com` destination — unchanged.
- All other site content.

## What this costs

- **Free.** No Lovable Cloud usage on form submissions at all.
- Tradeoff: inquiries are no longer stored in a database, so there's no admin record beyond Ellie's inbox. If a user's device has no email client configured (rare on phones, occasional on desktops), the mailto won't open — they'd need to email directly.

## Optional cleanup (ask before doing)

The `inquiries` table in the database becomes unused. It can be left in place (costs nothing extra) or dropped in a migration. Recommend leaving it for now in case you want to re-enable database capture later.
