# 🎉 Surprise Anniversary Website Template

A simple and customizable surprise anniversary website. You can easily personalize it by changing the login date and replacing the placeholder photos with your own.

---

## 📅 Change the Login Date

Open the JavaScript file and find the following line (around **line 53**):

```javascript
const correctDate = '25.07';
```

Replace **`25.07`** with your special date.

> **Example**
>
> ```javascript
> const correctDate = '14.02';
> ```

---

## 🖼️ Replace the Placeholder Images

When adding your own photos, **add one extra class to the `<div class="image">` wrapper** (not to the `<img>` tag).

### Landscape Photo (Default)

```html
<div class="image">
  <img src="your-photo.jpg" alt="">
</div>
```

### Portrait / Vertical Photo

```html
<div class="image portrait">
  <img src="your-photo.jpg" alt="">
</div>
```

### Square Photo

```html
<div class="image square">
  <img src="your-photo.jpg" alt="">
</div>
```

---

## 📌 Notes

- ✅ Change the date in the JavaScript file before sharing the website.
- ✅ Replace all placeholder images with your own memories.
- ✅ Only add the extra class (`portrait` or `square`) to the **wrapper `<div>`**, **not** the `<img>` element.
- ✅ Leave the wrapper as `<div class="image">` for landscape photos.

---

Enjoy customizing your surprise! ❤️
