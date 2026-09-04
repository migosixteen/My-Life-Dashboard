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


## v3.8 Grocery Stores Update

The shopping workflow is now store-first.

- Groceries is opened from More.
- Store selector is the primary filter.
- Built-in common store choices include Walmart, Costco, Food Basics, No Frills,
  FreshCo, Dollarama, Metro, Sobeys, Loblaws, Real Canadian Superstore, Longo's,
  Farm Boy, and Other.
- + New Store opens a store picker and also supports a custom store name.
- Each store maintains its own shopping items.
- Status remains To Buy / All / Purchased.
- Sort remains Default / Grocery Category / A-Z / Price Low-High / Price High-Low.
- Grocery Category groups the selected store's items into Produce, Meat, Dairy,
  Bakery, Frozen, Pantry, Household, Personal Care, and Other.
- Existing lists/stores and items are preserved for existing installations.
- Existing app data continues using `life-dashboard-v3`.


## v3.9 Full Calendar Update

- Full month calendar view
- Previous / next month controls and Today shortcut
- Tap a day to add an event on that date
- Tap an event in the month grid to edit it
- Monthly agenda beneath the calendar
- Category-specific event colors
- Category color legend for the visible month
- Existing reminders and event editing remain available

Default color mappings include Work, Personal, Health, Finance, Family,
Appointment, Birthday, and Travel. Custom categories receive a stable color automatically.

Existing data continues using the same `life-dashboard-v3` local-storage key.


## v4.0 Day View Update

The Calendar now includes a detailed Day View.

- Tap any calendar date once to select it and show that day's complete activity.
- Day View displays:
  - Events for the selected day
  - Tasks due that day
  - Event time, category color, category, and notes
  - Task completion status, time, category, and priority
- Check tasks directly from Day View to mark them complete.
- Tap an event in Day View to edit it.
- Tap the same selected calendar date again to add a new event on that date.
- The selected date is visually highlighted in the month calendar.
- Calendar category colors from v3.9 remain intact.
- Existing data continues using the same `life-dashboard-v3` local-storage key.
