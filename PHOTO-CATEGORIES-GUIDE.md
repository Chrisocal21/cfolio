# Photography Categories Guide

## How to Categorize Photos

To assign a category to a photo, add the `category` property to the photo object in `src/app/photography/page.tsx`.

### Available Categories

- `landscape` - Landscape photography
- `event` - Events and gatherings
- `portrait` - Portrait photography
- `blackwhite` - Black & White photography
- `nature` - Nature and wildlife
- `sports` - Sports and action photography

### Example

```javascript
const photos = [
  { 
    src: '/photography/photo1.jpg', 
    alt: 'Description of the photo', 
    title: 'Photo Title',
    category: 'landscape'  // ← Add this line
  },
  { 
    src: '/photography/photo2.jpg', 
    alt: 'Another photo', 
    title: 'Another Title',
    category: 'blackwhite'  // ← Add this line
  },
  // Photos without category will only show in "All Photos"
  { 
    src: '/photography/photo3.jpg', 
    alt: 'Uncategorized photo', 
    title: 'No Category'
    // No category property - shows in "All Photos" only
  },
]
```

### Quick Reference

| Category ID | Label | Use For |
|-------------|-------|---------|
| `landscape` | Landscape | Mountains, valleys, scenic views |
| `event` | Events | Corporate events, gatherings, parties |
| `portrait` | Portraits | Professional portraits, headshots, people |
| `blackwhite` | Black & White | B&W photography, monochrome |
| `nature` | Nature | Wildlife, plants, outdoor nature |
| `sports` | Sports | Athletic events, action shots |

### Tips

- Photos can only have ONE category
- Photos without a category still appear in "All Photos"
- Category counts update automatically
- Categories with 0 photos will still show in the filter bar

### Adding New Categories

To add a new category:

1. Open `src/app/photography/page.tsx`
2. Add to the `categories` array:
```javascript
{ id: 'yourcategory', label: 'Your Category Name' }
```
3. Assign photos to the new category using `category: 'yourcategory'`
