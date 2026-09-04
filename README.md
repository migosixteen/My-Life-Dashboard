# My Life Dashboard v3

A mobile-first personal productivity PWA.

## What's new in v3
- Edit existing tasks
- Edit existing calendar events
- Edit journal entries
- Browser notification reminders
- Better recurring tasks: completing a recurring task creates the next task
- Task and event categories
- Task search and filtering
- Professional mobile-first UI
- Dark mode
- Export/import JSON backups
- Offline PWA support

## Put it online with GitHub Pages
1. Extract this ZIP.
2. Open your existing `my-life-dashboard` GitHub repository.
3. Replace the old root files with the v3 files.
4. Commit the changes.
5. In GitHub Settings > Pages, publish from the `main` branch and `/ (root)`.
6. Wait for deployment to finish.
7. Open the site on your phone and refresh once.

## Important reminder limitation
Browser notifications work best while the app/browser is active. Standard web apps cannot guarantee exact background reminders on every phone when fully closed. For reliable scheduled push notifications across devices, a future cloud/backend version would be needed.

## Data storage
Your information is stored locally in the browser on each device. Use Export JSON to back up your data.


## iPhone Red / Black Edition
This build redesigns the dashboard with an iPhone-inspired visual system:
- black, red, and white theme
- large Today header
- iOS-style rounded cards and bottom navigation
- circular task controls
- stronger progress cards
- red category/priority accents
- redesigned calendar date cards
- floating Quick Add button
- iOS-style bottom-sheet forms

The underlying v3 local data model remains the same (`life-dashboard-v3`), so replacing
your existing v3 files should preserve data stored by the same website/browser.


## v3.5 Finance Edition

### Expenses
- Add, edit, and delete expenses
- Amount, date, category, payment method, and notes
- Monthly and category filtering
- Current-month spending total

### Debts
- Add, edit, and delete debts
- Balance, APR, minimum payment, extra payment, due date
- Debt-payoff priority
- Total remaining debt
- Monthly minimum and planned payment totals

Bottom navigation: Today / Tasks / Calendar / Money / More.
Journal remains available under More.

The app keeps the same `life-dashboard-v3` local-storage key so existing productivity
data should remain on the same GitHub Pages URL/browser. Export a JSON backup before upgrading.


## v3.6 Lists Edition
Adds reusable shopping and checklist support under More:
- Default Groceries list
- Multiple named lists (Costco, Walmart, Errands, Packing, Household, etc.)
- Add/edit/delete items
- Quantity, category, estimated price, purchased checkbox, notes
- Estimated total for remaining items
- Filter by category/status
- Clear purchased
- Rename/delete lists

Existing productivity, finance, calendar, reminders, journal, categories,
export/import, and local data remain in place.


## v3.7 Shopping Sort Update

Updated the Lists / Groceries experience for real shopping use:

- Selecting a list such as Walmart now shows all items for that list based on Status.
- Status options:
  - To Buy
  - All
  - Purchased
- The old category filter is replaced with Sort options:
  - Default
  - Grocery Category
  - A–Z
  - Price Low–High
  - Price High–Low
- Grocery Category sort groups items under category headings such as Produce, Meat, Dairy, Frozen, Pantry, Household, and more.
- Checking an item as purchased automatically removes it from the To Buy view.
- List summary now shows remaining items and purchased count.

Existing app data continues using the same `life-dashboard-v3` local-storage key.
