# Services Structure Documentation

## Overview
The services have been refactored to a simplified, dynamic structure with two main arrays: `mainServices` and `serviceDetails`.

---

## Data Structure

### 1. Main Services (mainServices)
Services displayed on the main services page (home page or `/services` route).

**Fields:**
- `id` (number) - Unique identifier
- `title` (string) - Main service title
- `short_description` (string) - Brief description for cards
- `image` (import/path) - Service image/illustration

**Example:**
```js
export const mainServices = [
  {
    id: 1,
    title: "Sales & Business Development",
    short_description: "Accelerate growth with our sales and business development expertise. QREV Business Solutions helps you capture opportunities, expand markets, and boost revenue.",
    image: SalesImg
  },
  {
    id: 2,
    title: "Revenue Cycle Management Services",
    short_description: "Maximize cash flow and minimize delays with our end-to-end Revenue Cycle Management services. QREV Business Solutions ensures accuracy, compliance, and faster reimbursements.",
    image: RevenueImg
  },
  {
    id: 3,
    title: "Software Solutions",
    short_description: "Empower your business with innovative, scalable, and tailor-made software solutions. QREV Business Solutions turns ideas into intelligent digital products that drive results.",
    image: SoftwareImg
  }
]
```

---

### 2. Service Details (serviceDetails)
Sub-services/detailed services shown on individual service detail pages.

**Fields:**
- `id` (number) - Unique identifier
- `title` (string) - Service detail title
- `short_description` (string) - Description of this service detail
- `related_services` (array of numbers, optional) - IDs of OTHER MAIN SERVICES related to this detail

**Example:**
```js
export const serviceDetails = [
  {
    id: 11,
    title: "Comprehensive Action Plan",
    short_description: "We help to design a custom plan for ensuring future success by setting goals, unique value proposition, targeting specific clients, creating market strategies, developing an implementation plan, budget, and a method to measure the effectiveness.",
    related_services: [2, 3]  // Links to main services with id 2 & 3
  },
  {
    id: 12,
    title: "Lead Generation",
    short_description: "Discover and analyse the characteristics of the ideal client. Identify how and where to connect with the ideal client. Qualify and prioritise the ideal lead sources, and develop a follow-up system.",
    related_services: [3]  // Links to main service with id 3
  },
  {
    id: 13,
    title: "Better Networking",
    short_description: "Increase the radius of influencers by leveraging the current network, build the perfect client network, and participate in the best professional organisations.",
    related_services: [1, 2]  // Links to main services with id 1 & 2
  }
]
```

---

## Page Flow

### Services Homepage
**Route:** `/services` or Home Page Services Section
**Display:** All `mainServices` as cards with images
**Action:** Click "More Info" → Navigate to `/services/{id}`

---

### Service Detail Page
**Route:** `/services/{id}` (where id = mainService.id)
**Display:**
1. **Main Service Card** (top)
   - Title
   - Short Description
   - Image

2. **Service Details Section** (below)
   - Multiple service detail cards
   - Each card shows: title + short_description
   - Accordion: "Related Services ▼" (if related_services exist)

3. **Related Services Accordion** (inside each detail card)
   - Shows other main services (by ID from related_services array)
   - Click → Navigate to that main service detail page

---

## Component Structure

### Services.jsx
Displays all `mainServices` as cards on home/services page.

```jsx
mainServices.map(service => (
  <Link to={`/services/${service.id}`}>
    <ServiceCard 
      title={service.title}
      description={service.short_description}
      image={service.image}
    />
  </Link>
))
```

---

### ServiceDetail.jsx
Displays a specific main service + its related service details.

```jsx
// Get service ID from URL params
const { id } = useParams();
const mainService = mainServices.find(s => s.id === id);

// Get all service details that belong to this main service
const relatedDetails = serviceDetails.filter(
  detail => /* logic to find details for this service */
);

return (
  <>
    {/* Main Service Card */}
    <MainServiceCard service={mainService} />
    
    {/* Service Details Section */}
    <ServiceDetailsGrid>
      {relatedDetails.map(detail => (
        <ServiceDetailCard 
          key={detail.id}
          detail={detail}
          relatedServices={detail.related_services}
        />
      ))}
    </ServiceDetailsGrid>
  </>
)
```

---

### ServiceDetailCard.jsx
Individual service detail card with accordion for related services.

```jsx
const ServiceDetailCard = ({ detail, relatedServices }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get main services by ID for related services
  const relatedMainServices = mainServices.filter(
    s => relatedServices?.includes(s.id)
  );

  return (
    <Card>
      <h3>{detail.title}</h3>
      <p>{detail.short_description}</p>
      
      {relatedServices && relatedServices.length > 0 && (
        <Accordion>
          <AccordionButton onClick={() => setIsExpanded(!isExpanded)}>
            ▼ Related Services ({relatedServices.length})
          </AccordionButton>
          
          {isExpanded && (
            <AccordionContent>
              {relatedMainServices.map(service => (
                <Link key={service.id} to={`/services/${service.id}`}>
                  <RelatedServiceLink>
                    {service.title}
                  </RelatedServiceLink>
                </Link>
              ))}
            </AccordionContent>
          )}
        </Accordion>
      )}
    </Card>
  )
}
```

---

## Example Workflow

### Scenario: User navigates to Sales & Business Development

1. **Homepage** - User sees 3 main service cards:
   - Sales & Business Development ← User clicks "More Info"
   - Revenue Cycle Management
   - Software Solutions

2. **Navigate to `/services/1`** (Sales & Business Development detail page)

3. **Page displays:**
   - **Main Service:** "Sales & Business Development" with image
   - **Service Details Section:**
     - Card 1: "Comprehensive Action Plan"
       - Description...
       - ▼ Related Services (2)
         - Revenue Cycle Management (id: 2)
         - Software Solutions (id: 3)
     
     - Card 2: "Lead Generation"
       - Description...
       - ▼ Related Services (1)
         - Software Solutions (id: 3)

4. **User clicks "Revenue Cycle Management"** from related services
   - Navigate to `/services/2`
   - Shows Revenue Cycle Management detail page

---

## Mapping Service Details to Main Services

**Current Structure Question:** Which service details belong to which main service?

**Solution:** Add optional `categoryId` field to serviceDetails:

```js
serviceDetails = [
  {
    id: 11,
    title: "Comprehensive Action Plan",
    short_description: "...",
    categoryId: 1,  // Belongs to Sales & Business Development (id: 1)
    related_services: [2, 3]
  }
]
```

Then filter:
```js
const detailsForService = serviceDetails.filter(d => d.categoryId === mainServiceId)
```

---

## Implementation Checklist

- [ ] Update `data.js` with new `mainServices` structure
- [ ] Update `data.js` with new `serviceDetails` structure
- [ ] Create `ServiceDetailCard.jsx` component with accordion
- [ ] Update `ServiceDetail.jsx` page component
- [ ] Update `Services.jsx` to use mainServices
- [ ] Create accordion/dropdown UI component
- [ ] Test navigation between services
- [ ] Test related services links
- [ ] Mobile responsive testing

---

## Notes

- `related_services` contains IDs of OTHER MAIN SERVICES only
- Service details can belong to multiple main services (if needed)
- Accordion format: User clicks to expand/collapse related services
- Each related service is clickable and navigates to that main service's detail page
