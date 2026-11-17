---
title: "Pallets for Conveyors and Shuttles: Interface Checklist"
description: "Specify pallet runner contact, roller spacing, chain centres and pickup clearances. Use the station-by-station interface record before an AS/RS sample trial."
summary: "Map the pallet underside against every support and handover, distinguish travel direction from pallet rotation, and record the drawings and checks needed for approval."
date: 2026-07-12
lastmod: 2026-11-17T12:01:00+08:00
layout: "guide"
image_width: 1536
image_height: 1024
author: "BAOHENG"
readingTime: "7 min"
show_toc: true
translationKey: "specify-pallet-for-conveyors-shuttles"
article_schema: true
image: "/images/resources/insights/conveyor-shuttle-pallet-interface.webp"
image_alt: "Illustration of a blue grid-deck plastic pallet at an automated conveyor transfer"
image_caption: "AI-generated editorial illustration, not a BAOHENG equipment trial or a model-specific interface drawing."
intro: "A pallet can fit the conveyor width and still need a different support or pickup arrangement at the next station. Put each handover on the same interface record."
---
**To specify a pallet for conveyors and shuttles, match the actual underside contact areas to the equipment supports, then check the approach, handover, lifting and withdrawal movements.** Record direction, dimensions and acceptance criteria for each station. Overall footprint, four-way fork entry and a catalogue load figure do not establish that match.

This guide helps warehouse buyers and automation integrators prepare the information needed for a drawing review and representative sample trial. It develops the interface checks in our [AS/RS pallet selection guide]({{< relref "resources/insights/asrs-plastic-pallet-selection-guide.md" >}}), rather than prescribing one roller spacing or pallet base for every installation.

## 1. Fix a reference side before describing the route {#direction}

Mark a reference side **A** on the pallet drawing and use it on the route plan, photographs and sample record. At each station, draw the direction of travel and identify which pallet edge enters first. Mark runner direction separately; terms such as “lengthways” become ambiguous when different drawings use different views.

Distinguish a change in travel direction from rotation of the pallet. A sideways transfer can change which part of the base crosses the next supports even when the pallet itself does not rotate. A turntable needs an entry and exit view showing the pallet's final orientation relative to the next conveyor. A square footprint does not remove the need to identify its underside direction.

For example, [Interroll's PM 9730](https://www.interroll.com/products/mpp/pm-9730) is described as a chain-transfer module for a 90° change of direction. That is a module-specific function to identify on the route; it is not approval for a BAOHENG pallet or a substitute for the installed arrangement's drawing.

**Four-way fork entry is a separate characteristic.** It describes fork access and does not prove continuous support during conveying in four directions, or clearance for a shuttle's pickup mechanism.

## 2. Compare contact areas, not just the outside rectangle {#support}

Start with a dimensioned underside view of the exact **family + model + configuration + drawing revision**. Mark the intended bearing areas, openings, ribs, runner ends and any features that can meet equipment. Overlay the equipment supports using the same reference side and units. Keep unknown dimensions marked “to confirm.”

| Interface | Dimensions or details to request | Review question |
| --- | --- | --- |
| Roller conveyor | Roller diameter, centre-to-centre spacing along travel, usable width and end-roller positions | Which parts of the pallet are actually supported as it advances and crosses the end of the section? |
| Chain conveyor | Number of chain tracks, their centre positions across the conveyor, contact width and top elevation | Do the intended pallet bearing areas meet those tracks throughout the movement? |
| Transfer or lift | Outgoing and incoming support edges, gap, relative heights and lifting sequence | What supports the load during the handover, including the partially transferred position? |
| Shuttle or crane pickup | Support/pickup locations, entering element dimensions, lift movement and withdrawal path | Are the required openings and clearances available before, during and after lifting? |

**Chain centre spacing is not chain-link pitch.** The first describes where parallel tracks sit across the conveyor; the second describes the spacing of repeating links within a chain. A chain-drive specification alone leaves the pallet contact locations unresolved. Likewise, roller centre spacing is not the clear gap between roller surfaces.

The equipment provider should assess support for the proposed pallet, complete load and operating conditions. Do not turn pallet length divided by roller spacing into an acceptance rule: that calculation alone does not describe openings, end supports, contact distribution or the handover sequence. This guide sets no universal roller count, transfer gap or clearance limit.

## 3. Review each handover and change of orientation {#handover}

Give every critical station an ID, such as **T1**, and link it to the relevant equipment drawing. For each transfer, show the unit approaching, crossing between supports and reaching its final pickup or stop position. Include the relevant entry and return movements, rather than reviewing only a pallet parked in the middle of a conveyor.

[Mecalux's pallet-conveyor overview](https://www.mecalux.com/warehouse-automation/pallet-conveyor) distinguishes roller/chain transfers from different turntable arrangements. For your project, identify the actual mechanism and have its provider confirm how support, direction and pallet orientation change. Do not infer those movements from the station name alone.

Three-runner and full-perimeter bases are candidates to compare against this route. A perimeter frame adds contact around the edges but does not guarantee clearance at a lift, guide or pickup. Three runners define particular bearing lines whose relationship to each support still needs review. For a worked discussion of the base choice, see the [mixed-conveyor application scenario]({{< relref "resources/customer-cases/mixed-conveyor-runner-selection.md" >}}); it is an illustrative scenario, not a completed customer trial.

## 4. Add the stops, sensing and complete load {#other-interfaces}

Mark the faces that stops, guides and centring devices are intended to contact, together with their agreed position limits. Identify sensor target areas and label-reading positions before and after any orientation change. A successful passage on the main conveyor leaves these station-specific checks open.

Use the [pallet colour and sensor detection checklist]({{< relref "resources/insights/asrs-pallet-color-sensor-detection.md" >}}) for the actual sensing arrangement. Keep detection settings under the equipment provider's control; a rejected pallet is not a reason to bypass detection.

Review the finished unit as well as the base. Record payload separately from total moving mass, including the pallet and packaging. Add the [complete loaded dimensions]({{< relref "resources/insights/asrs-pallet-unit-load-dimensions.md" >}}), load distribution, temperature and relevant storage duration. Include wrap or straps wherever they approach a support, opening or sensor; the [stretch-wrap interface guide]({{< relref "resources/insights/asrs-pallet-stretch-wrap-clearance.md" >}}) addresses those checks.

### Include the empty-pallet magazine where the route uses one {#empty-pallet-magazine}

An empty pallet may also need to be separated from a stack before it reaches the conveyor. [GEBHARDT describes empty-pallet magazines](https://us.gebhardt-group.com/index.php/products/conveying-transporting-sorting/pallet-conveyor-technology/stacking-and-storing/stacker-destacker.html) used for buffering ahead of high-bay warehouses. Treat that magazine and its discharge as another interface, not proof that any particular pallet will run in it.

- **Stack and grip:** identify the exact pallet configuration, orientation, number of pallets, measured stack height and total stack mass. On the actual machine drawing, ask the equipment provider to mark holding or lifting contacts, the separation movement and required clearance. Do not assume equal outside dimensions mean equal stacking or gripping geometry.
- **Discharge:** record which edge exits first, where the released pallet lands, and how its runners meet the receiving rollers or chains. Ask the provider to include the full magazine, the last pallet and normal replenishment in the agreed trial; include serviceable returned pallets if the route uses them.
- **Result:** agree in advance what counts as a correct single-pallet release, position and handover. Record missed or multiple releases, skew, contact and sensor exceptions by station and sample. Mixed configurations should be tested only if they are part of the approved operating plan.

For one illustration of a particular mechanism, [Alba's dispenser case study](https://www.albamfg.com/wp-content/pdf/Alba-Manufacturing-Case-Study-10042021.pdf) describes fingers holding a stack while a lift separates a pallet onto a chain conveyor. Other machines may work differently. Use the installed equipment's instructions and approved guarding and isolation procedures; do not enter or clear a running machine. Empty-stack release does not approve the pallet's loaded storage or handling performance.

## 5. Turn the drawing review into a trial record {#trial}

Have the system provider define the trial scope, loads, operating conditions, sample quantity, repetitions and acceptance criteria. Use the proposed production configuration and retain the sample ID. An empty-pallet run can reveal geometry or detection issues; it does not reproduce loaded deformation, goods movement or the finished load envelope. A successful static test alone does not prove conveyor compatibility.

For each relevant station, record support and clearance observations, pickup and withdrawal, positioning, detection and package movement. Include the provider's agreed start, stop, accumulation and return sequences where applicable. If there is rocking, catching, unexpected contact, load movement or a detection exception, hold the trial under the site's procedure and refer the observation to the responsible reviewer before continuing.

Retain the station ID, sample and load, drawing revision, observation, photographs or video, action owner and repeat-check result. Mark untested conditions **pending**. Use the broader [sample acceptance checklist]({{< relref "resources/insights/asrs-pallet-sample-testing-checklist.md" >}}) to connect these interface results with configuration, rack-load and purchase approval.

Any access for inspection or adjustment must follow the site's approved safe-working and isolation procedures. Do not reach into running conveyors or defeat guards and interlocks. [HSE's equipment-maintenance guidance](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm) explains planning and isolation for maintenance; it does not prescribe the acceptance trial for your installation.

## 6. Share one record per station {#interface-record}

Keep the common pallet and load specification once, then repeat the station block for each handover. The downloadable record provides fields for dimensions, drawing references, criteria and unresolved items. It is an enquiry and review aid, not an engineering acceptance standard.

{{< guide-download src="/downloads/asrs-pallet-interface-record-en.txt" label="Download the conveyor and shuttle interface record" detail="Editable text · pallet reference, station geometry and review decisions" >}}

[Send BAOHENG the available interface record]({{< relref "contact.md" >}}) with the required quantity, candidate family/model, underside drawing and relevant equipment requirements. We can use those details to discuss candidate pallet configurations and sample requirements. Final equipment compatibility and release remain subject to the responsible parties' project review.

## Sources and scope {#sources}

- [Interroll — PM 9730 chain transfer](https://www.interroll.com/products/mpp/pm-9730): example of an equipment-specific change of travel direction.
- [Mecalux — Pallet conveyor systems, components](https://www.mecalux.com/warehouse-automation/pallet-conveyor): distinct transfer and turntable arrangements.
- [HSE — Maintenance of work equipment, safe isolation](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm): maintenance-access and isolation guidance.
- [GEBHARDT — Stacker / destacker](https://us.gebhardt-group.com/index.php/products/conveying-transporting-sorting/pallet-conveyor-technology/stacking-and-storing/stacker-destacker.html): empty-pallet buffering in automated warehouse routes.
- [Alba Manufacturing — pallet dispenser case study](https://www.albamfg.com/wp-content/pdf/Alba-Manufacturing-Case-Study-10042021.pdf), page 2: one stack-holding and single-pallet discharge arrangement.

Conveyor sources reviewed on 11 November 2026; magazine sources reviewed on 17 November 2026. The interface fields and review sequence are editorial recommendations, not a BAOHENG test result, equipment certification or universal dimensional specification. The existing cover is an AI-generated illustration; no new product-performance claims are made.
