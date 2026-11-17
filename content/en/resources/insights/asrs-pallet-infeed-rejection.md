---
title: "AS/RS Pallet Rejected at Infeed: What Should You Check?"
description: "A practical response to an AS/RS infeed rejection: record the alarm, separate load, pallet and identification checks, and agree the next review."
summary: "Use the actual rejection code and safe inspection record to distinguish a load-profile issue, pallet-interface concern or identification mismatch before ordering a replacement."
date: 2026-11-17T16:18:00+08:00
lastmod: 2026-11-17T16:18:00+08:00
author: "BAOHENG"
readingTime: "7 min"
layout: "guide"
show_toc: true
translationKey: "asrs-pallet-infeed-rejection"
article_schema: false
intro: "A rejected unit is a signal to investigate, not proof that the pallet is the cause. Start with the station's actual message and the complete load."
---
**When an automated warehouse rejects a pallet at infeed, keep the affected unit under the site's hold procedure, capture the station message, and identify what that station actually checked.** Review the wrapped load, the pallet and its interfaces, and identification separately. Ask the responsible equipment and warehouse teams to assess the evidence before changing a pallet or releasing the unit.

This guide is for an operational exception after a rejection. It helps a warehouse team decide what information to collect and whom to involve; it is not a remote diagnosis or an equipment recovery procedure.

## 1. Preserve the message and move the review to a safe location {#first-response}

Record the exact alarm text or code, station ID, time, unit or pallet ID, direction and the point in the sequence at which the rejection occurred. Save the relevant event reference and photographs if the site's procedures permit. If the display shows several messages, keep their order rather than selecting one that appears to explain everything.

Follow the site's approved route to a designated inspection or rework position. If the unit is stopped inside equipment, use the site's authorised recovery and isolation procedure. Do not reach into moving equipment, defeat guards or interlocks, or change a detection setting simply to make the unit pass. [HSE's work-equipment maintenance guidance](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm) discusses planning and safe isolation; the installed equipment's instructions govern the actual intervention.

An entry checkpoint can combine different functions. [Mecalux's description of an automatic pallet inspection station](https://www.mecalux.de/handbuch-lagerlogistik/paletten/palettenpruefanlage) illustrates checks for the load profile, pallet base, weight and identification. Your installation may use a different combination. Obtain the meaning of the actual code and the station's documented measurement from the system provider.

## 2. Match the message to the right review {#triage}

The observations below are questions for the responsible team, not a lookup table that diagnoses the cause. If the code or measured value is unavailable, record it as unknown and ask the equipment provider for the event details.

| Message or finding to investigate | Information to collect at the safe inspection point | Who should review it? |
| --- | --- | --- |
| Profile or height/width exception | Maximum finished-unit dimensions, overhang on each side, leaning packages, wrap or projecting labels; measurement method and recorded value | Warehouse and equipment provider; packaging provider where needed |
| Weight exception | Scale reading and limits, complete unit mass including pallet and packaging, relevant item record and weighing conditions | Warehouse and scale/system provider |
| Pallet base, opening or support concern | Family, model and drawing revision; travel direction; top, underside and side photographs; affected opening or runner | Pallet supplier and equipment provider |
| Identification or data mismatch | Expected and captured ID, station, label position and condition, system record and relevant event reference | Warehouse system and identification provider |
| No clear code or intermittent rejection | Exact sequence, affected unit and station, observed differences and available logs; note what has not been checked | System provider with warehouse operations |

Do not assume every station measures every item in the table. A profile check may pass while an unmeasured underside or rack-load question remains open. A successful scan may still require the system owner to check that the correct load is associated with the correct pallet.

## 3. Compare the complete load with the applicable limits {#load-check}

Measure the finished unit in the condition presented to the checkpoint, including the pallet, packaging, wrap and protrusions. Record length, width and total height, and identify the side and amount of any overhang. Note whether the unit was centred or leaning. Compare the measurements and complete mass with the limits and measurement method for that station and route; do not substitute a guessed tolerance.

For example, if a system reports a width exception, first obtain its recorded value and the permitted profile, then measure the unit at the inspection point. A bulging carton, wrap fold, positioning difference or measurement issue are possibilities to review, not conclusions from the alarm alone. Have the responsible teams agree any rework and verification. The [unit-load dimensions guide]({{< relref "resources/insights/asrs-pallet-unit-load-dimensions.md" >}}) explains how to record the envelope; the [stretch-wrap guide]({{< relref "resources/insights/asrs-pallet-stretch-wrap-clearance.md" >}}) covers film and identification areas.

## 4. Decide whether the pallet needs a separate review {#pallet-check}

If the finding concerns the base or pickup interface, identify the exact family, model, configuration and approved drawing revision. In a safe inspection area, record visible damage, deformation or obstruction and photograph the underside and relevant side. Mark which edge entered first and which runner or opening is involved. Ask the supplier and system provider to compare it with the accepted configuration and station drawing.

A replacement is a candidate when the evidence identifies an unsuitable or damaged pallet; matching length and width alone does not approve it. If a finding cannot be judged against the agreed criteria, keep the unit on hold for the responsible reviewer. Use the [pallet inspection checklist]({{< relref "resources/insights/asrs-plastic-pallet-inspection-checklist.md" >}}) for condition and disposition, and the [conveyor and shuttle interface guide]({{< relref "resources/insights/specify-pallet-for-conveyors-shuttles.md" >}}) for contact and pickup information.

## 5. Record the decision and scope of any repeat check {#release}

The operator, system provider and relevant pallet or packaging supplier should agree the next step under the site's procedure. Keep the original event, proposed action, responsible person and decision together. If a repeat check is authorised, record the changed item, sample or unit, station, conditions, result and reviewer. A passed repeat check applies to what was actually checked; it does not establish every later handling or long-term storage condition.

If several units show a similar exception, give the provider their individual IDs, station and event references, configurations and observed differences. This makes it possible to compare cases without treating correlation as proof of a pallet defect.

## What to send with a pallet enquiry {#next-step}

[Contact BAOHENG]({{< relref "contact.md" >}}) with the confirmed pallet family/model and drawing revision, top and underside photographs, the affected contact or opening, load pattern and mass, travel direction, and the equipment provider's relevant requirements. Include the alarm and station record where it can be shared. We can discuss candidate pallet configurations and sample information; the equipment provider and site remain responsible for diagnosis and release.

## Sources and scope {#sources}

- [Mecalux — Automatic pallet inspection station](https://www.mecalux.de/handbuch-lagerlogistik/paletten/palettenpruefanlage): example of checkpoint functions and exception routing, not a description of every installation.
- [HSE — Maintenance of work equipment](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm): planning and isolation for equipment interventions.

Sources reviewed on 17 November 2026. The response sequence and example are editorial guidance, not a BAOHENG test, customer incident, equipment manual or universal acceptance limit.
