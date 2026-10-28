---
title: "Pallet Load Size and Overhang in AS/RS: A Practical Specification Guide"
description: "Specify pallet load dimensions, overhang, weight and contact pattern for an automated warehouse. Use the checklist to prepare a clearer pallet enquiry."
summary: "Measure the complete unit load, describe how it contacts the pallet and compare it with the warehouse route before selecting an AS/RS pallet."
date: 2026-10-28T09:00:00+08:00
lastmod: 2026-10-28T09:00:00+08:00
author: "BAOHENG"
readingTime: "7 min"
layout: "guide"
translationKey: "asrs-pallet-unit-load-dimensions"
article_schema: true
image: "/images/resources/insights/asrs-pallet-unit-load-diagram-en.png"
image_width: 1536
image_height: 1024
image_alt: "Plan-view diagram showing a load overhanging both ends of a pallet"
image_caption: "Plan view of pallet and load footprints. Overhang is exaggerated for clarity and is not an acceptance limit."
intro: "The pallet is only part of the footprint. Describe the complete loaded unit so your pallet supplier and automation provider can review the same operating conditions."
---
**To specify an AS/RS pallet, record the loaded unit's maximum length, width, height and total mass, as well as how the goods contact the deck.** Compare that information with the pallet, storage supports and every handling interface. The pallet footprint alone does not describe the space or support the load needs.

A pallet may fit a conveyor while its cartons, wrap or leaning load exceed a guide or profile check. Two loads of equal mass can also contact the deck differently. This guide helps warehouse buyers and integrators prepare a shared description before choosing a pallet or arranging a trial.

## 1. Measure the complete unit load {#measure}

Record the pallet's length, width and height separately from the maximum outside dimensions of the assembled unit. Measure **overall loaded height from the floor to the highest point**, including the pallet. Include packaging, edge protectors, wrap, labels, straps and any part of the goods that projects beyond the pallet. Note whether dimensions are measured, drawing values or estimates.

Use a plan view to identify each side and orientation. Record both the normal and maximum expected loaded envelope, including bulging or leaning where relevant; do not assume that nominal carton dimensions describe the finished unit. Compare the maximum envelope with the limits supplied for the actual system, including positioning tolerance and required clearance. The equipment provider should confirm the allowance and measurement method.

| Dimension | What to record | Why it matters |
| --- | --- | --- |
| Pallet | Length × width × height; model and drawing revision | Identifies the base and handling geometry |
| Goods and packaging | Maximum outside length and width, with projections on each side | Shows the envelope presented to guides and adjacent loads |
| Complete unit | Maximum outside length × width × height, including pallet | Allows comparison with the route and storage position |
| Orientation | Mark a reference side and the direction of travel and storage | Prevents width and depth from being exchanged at a transfer |

[Interroll's pallet-flow design form](https://www.interroll.com/fileadmin/user_upload/AMERICAS/Application_Data_Sheets/Interroll-Pallet-Flow-Form.pdf) separately asks for pallet size, load size and loaded height including the pallet. It is an example of the information an equipment supplier may request, not a universal acceptance specification.

## 2. Identify overhang and underhang on each side {#overhang}

**Overhang** means goods or packaging extend beyond a pallet edge. **Underhang** means the load edge sits inside the pallet edge. Record the amount and location on all four sides; do not infer a per-side value from the difference between overall widths unless the load is known to be centred.

For example, a 1,200 × 1,000 mm pallet carrying a centred load measuring 1,240 × 1,000 mm has 20 mm of overhang at each end of its 1,200 mm dimension. If the same load is offset, the two end values will differ. This is an arithmetic example, **not an acceptable overhang limit or a BAOHENG product claim**.

Overhang can change the envelope seen by guides and sensors, affect clearances between stored loads and leave part of the goods without pallet support. Underhang can change where guides or stops contact the unit. An overhanging load is not automatically suitable or unsuitable: the packaging, its support and the system's stated limits all need review. Ask the packaging and equipment providers to assess the actual arrangement; do not compensate for an unknown clearance with an assumed tolerance.

## 3. Describe the load on the deck, not just its weight {#load-pattern}

List the **payload mass** and the **total unit mass**, which includes the pallet and associated packaging. Give normal and maximum values, and identify whether they are measured or estimated. A supplier's load figure must be reviewed against the applicable pallet configuration and conditions; it is not a substitute for describing the load.

Show the bottom layer in a plan-view sketch or photograph. Mark contact areas and dimensions, any concentrated feet or drums, gaps, and whether the centre of gravity is offset or can shift. Cartons distributed across the deck, a rigid container on feet and a drum may impose different contact patterns even at the same total mass. Describe the packaging and load restraint as well.

[ISO 8611-3:2011](https://www.iso.org/standard/50116.html) concerns maximum working loads for new flat pallets with known payloads in different handling environments. It does not establish a working load for an unspecified configuration. For support span, dwell time and other conditions, see our [rack-load guide]({{< relref "resources/insights/rack-load-is-not-a-single-number.md" >}}).

## 4. Check the whole route with the system provider {#route}

Mark the orientation at each step: infeed, conveyor transfers, lift, shuttle or stacker-crane pickup, rack position and outfeed. Note where a unit rotates, changes support or is picked up. At each location, compare the agreed envelope and total mass with the equipment supplier's limits, and review the actual contact and sensing surfaces.

Check the pallet underside separately: runner direction, support contact, openings and pickup clearances must match the relevant equipment. A load that fits through a profile check may still have a runner or pickup interface to resolve. Our [conveyor and shuttle guide]({{< relref "resources/insights/specify-pallet-for-conveyors-shuttles.md" >}}) covers the interface information to collect.

UK HSE's [pallet safety guidance](https://www.hse.gov.uk/pubns/pm15.pdf) discusses stable loading and notes that plastic pallets may need additional measures to secure goods. The appropriate restraint and operating rules depend on the load and route; have the responsible parties agree them for the project.

## 5. Share one unit-load specification {#checklist}

Copy the following into an enquiry or project review. For multiple SKUs or loading patterns, make a separate entry for each relevant case and mark unknowns **to confirm**.

| Information | Your project record |
| --- | --- |
| Goods / SKU and package type | __________ |
| Pallet family, model and drawing revision | __________ |
| Pallet dimensions and mass | __________ |
| Payload mass: normal / maximum | __________ |
| Total unit mass, including pallet and packaging | __________ |
| Maximum complete unit length × width × height | __________ |
| Overhang or underhang at each of four sides | __________ |
| Bottom-layer contact sketch, feet, gaps and offset | __________ |
| Restraint, wrap and possible load movement | __________ |
| Travel and storage orientation; any rotation | __________ |
| Equipment limits, support arrangement and temperature | __________ |
| Measurements / estimates, photos and open questions | __________ |

Send the same record to the pallet supplier, packaging owner and system provider. Ask each to identify the conditions they can confirm and the items that require a drawing, measurement or trial.

## Frequently asked questions {#faq}

### Can an AS/RS handle pallet overhang?

That depends on the particular load, its support and the system's clearances and acceptance criteria. Measure each side and ask the system and packaging providers to review the proposed arrangement. There is no universal value in this guide.

### Should loaded height include the pallet?

Record the complete height including the pallet, and label it clearly. If a supplier also requests the goods-only height, supply both rather than leaving the definition ambiguous.

### Is payload the same as total unit mass?

No. Record payload separately, then state the total mass of everything handled together, including pallet and packaging. Check which figure each equipment specification uses.

### Can a successful empty-pallet run approve the loaded unit?

An empty run can reveal some geometry issues, but it does not reproduce the complete envelope, load movement or loaded support conditions. Agree representative loaded checks and acceptance criteria with the responsible parties. See the [sample testing checklist]({{< relref "resources/insights/asrs-pallet-sample-testing-checklist.md" >}}).

## Next step {#next-step}

[Send BAOHENG your unit-load specification]({{< relref "contact.md" >}}), a bottom-layer sketch and the relevant equipment drawings or limits. We can use them to discuss candidate pallet configurations and identify what remains to be confirmed. Browse the [product catalogue]({{< relref "product/_index.md" >}}) to prepare a shortlist.

## Sources {#sources}

- [ISO 8611-3:2011 — Maximum working loads](https://www.iso.org/standard/50116.html): scope of working-load determination for known payloads and handling environments.
- [HSE — Pallet safety, PM15](https://www.hse.gov.uk/pubns/pm15.pdf): general guidance on pallet loading and stability.
- [Interroll — Pallet Flow Design Criteria](https://www.interroll.com/fileadmin/user_upload/AMERICAS/Application_Data_Sheets/Interroll-Pallet-Flow-Form.pdf): example of pallet and load information requested for a particular equipment design.
