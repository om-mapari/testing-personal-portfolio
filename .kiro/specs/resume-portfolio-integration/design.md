# Design Document: Resume Portfolio Integration

## Overview

This feature updates the existing personal portfolio website to reflect the complete resume information for Om Mapari. The portfolio is a single-page application built with HTML, CSS, and JavaScript, featuring multiple sections (About, Resume, Portfolio, Contact) navigated via a navbar. The update involves modifying the HTML content to include comprehensive professional information while maintaining the existing design patterns and styling.

## Architecture

The portfolio follows a simple static website architecture:

```
┌─────────────────────────────────────────────────────────┐
│                     index.html                          │
│  ┌─────────────┐  ┌──────────────────────────────────┐ │
│  │   Sidebar   │  │         Main Content             │ │
│  │  - Avatar   │  │  ┌────────────────────────────┐  │ │
│  │  - Name     │  │  │         Navbar             │  │ │
│  │  - Title    │  │  ├────────────────────────────┤  │ │
│  │  - Contacts │  │  │  About | Resume | Portfolio│  │ │
│  │  - Social   │  │  │        | Contact           │  │ │
│  └─────────────┘  │  └────────────────────────────┘  │ │
│                   └──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### File Structure
- `index.html` - Main HTML file containing all sections
- `assets/css/style.css` - Styling (no changes needed)
- `assets/js/script.js` - Navigation and interactivity (no changes needed)

## Components and Interfaces

### 1. Sidebar Component
Updates required:
- Title: Change from "DevSecOps & AWS Cloud Engineer" to "Full Stack Engineer"
- Location: Update to "Pune, Maharashtra, India"

### 2. About Section
Updates required:
- Summary text: Update to reflect full-stack expertise
- Services list: Update to 5 services matching resume focus areas

### 3. Resume Section
Updates required:
- Experience timeline: Split Barclays into two roles (SDE 2 and SDE 1)
- Education timeline: Add MH-CET achievement
- Skills: Replace progress bars with categorized skill lists
- New sections: Certifications, Achievements, Coding Profiles

### 4. Portfolio Section
Updates required:
- Add all 11 projects from resume
- Categorize projects appropriately (Web Development, AI/ML, Cloud Solutions, Tools)

## Data Models

### Project Item Structure
```html
<li class="project-item active" data-filter-item data-category="category-name">
  <a href="github-link" target="_blank">
    <figure class="project-img">
      <div class="project-item-icon-box">
        <ion-icon name="eye-outline"></ion-icon>
      </div>
      <img src="image-path" alt="project-name" loading="lazy">
    </figure>
    <h3 class="project-title">Project Name</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

### Timeline Item Structure
```html
<li class="timeline-item">
  <h4 class="h4">Company Name</h4>
  <h5 class="h5 timeline-item-title">Role Title</h5>
  <span>Date Range</span>
  <p class="timeline-text">
    • Achievement 1<br>
    • Achievement 2<br>
  </p>
</li>
```

### Skill Category Structure
```html
<div class="skills-category">
  <h4 class="h4">Category Name</h4>
  <p class="skills-text">Skill 1, Skill 2, Skill 3</p>
</div>
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, all acceptance criteria are testable as examples (specific content verification) rather than properties (universal rules). This is expected for a static content update feature where we're verifying specific text and elements exist in the HTML.

Since this is a static HTML content update with no dynamic logic, algorithmic processing, or data transformations, there are no universally quantified properties to test. All requirements are verified through example-based testing (checking specific content exists in the rendered HTML).

The testing approach will focus on:
1. Verifying specific text content exists in each section
2. Verifying all required links are present and correct
3. Verifying project items have correct categories for filtering
4. Verifying HTML structure is valid

## Error Handling

Since this is a static HTML update, error handling is minimal:
- Ensure all external links use `target="_blank"` for new tab opening
- Ensure all images have `alt` attributes for accessibility
- Ensure all project items have correct `data-category` attributes for filtering to work

## Testing Strategy

### Manual Testing
1. Visual inspection of each section to verify content accuracy
2. Test navigation between sections
3. Test project filtering functionality
4. Test responsive design on different screen sizes
5. Verify all external links work correctly

### Automated Testing (Optional)
Since this is a static HTML update, automated testing would involve:
- HTML validation using W3C validator
- Link checking for broken links
- Content verification using DOM queries

Given the static nature of this feature, manual visual testing is the primary testing approach. No property-based testing is applicable as there are no algorithmic transformations or dynamic data processing.
