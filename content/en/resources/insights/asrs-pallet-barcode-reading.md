---
title: "AS/RS Pallet Barcode Reading: Label Placement and No-Read Checks"
description: "Plan pallet and load identification for a fixed AS/RS barcode reader, and investigate no-reads without confusing the pallet ID with the load ID."
summary: "Define what must be read, mark the label and reader positions, and check the printed code, finished load and system record together."
date: 2026-11-21T12:03:00+08:00
lastmod: 2026-11-21T12:03:00+08:00
author: "BAOHENG"
readingTime: "7 min"
layout: "guide"
show_toc: true
translationKey: "asrs-pallet-barcode-reading"
article_schema: true
image: "/images/resources/insights/asrs-pallet-barcode-reading.webp"
image_width: 1536
image_height: 1024
image_alt: "Illustration of a palletized load near a fixed reader, with a blank label on a carton"
image_caption: "AI-generated editorial illustration based on a BAOHENG product reference; the blank label and reader are illustrative, not an approved position or an actual test."
intro: "A readable label must carry the right identity, face the right reader and remain readable in the finished operating arrangement."
---
**For reliable AS/RS identification, first define which object each station must identify, then agree the label position, reader arrangement and system response for the actual load and route.** A barcode that can be scanned by hand is useful evidence, but it does not by itself prove that the fixed reader captures the correct identity during normal operation.

This guide examines label placement and no-read investigation. The [stretch-wrap guide]({{< relref "resources/insights/asrs-pallet-stretch-wrap-clearance.md" >}}) covers film restraint and mechanical clearances and introduces identity checks; use this page when the specific decision is how to prepare and investigate an optical barcode-reading station. RFID uses different technology and needs its own assessment.

## 1. Decide what each barcode identifies {#identity}

A reusable pallet may have an **asset ID** that stays with it. The goods on that pallet may have a separate **logistic-unit ID** that changes when the load is rebuilt or separated. A carton can also carry its own product code. These identities are not interchangeable. For example, [GS1 Sweden's guidance](https://gs1.se/en/guides/how-to-guides/labeling-the-pallet/rules-and-recommendations/) describes an SSCC as an identifier for the logistic unit; it does not turn a pallet's asset identifier into the load identifier.

For each infeed, transfer or empty-return station, agree with the system owner which identity is expected, which barcode type and data format are supported, and how the pallet-to-load association is created, changed and removed. Record the expected action if the reader sees no code, multiple codes, a valid but unexpected code, or a code that does not match the warehouse record. A successful decode is not proof that the association is correct.

## 2. Mark the label and reader on the same route drawing {#placement}

Mark a reference side of the actual pallet and finished load. For each station, show travel direction, whether the unit rotates, the surface intended to carry the code and the reader's position. Record the proposed label height from an agreed reference, its orientation and the anticipated variation in pallet position. Ask the equipment provider whether that complete range falls inside its installed reading field and focus conditions.

| Question | What to establish with the responsible party |
| --- | --- |
| Which surface? | A stable area on the actual pallet or load, with enough space for the whole symbol and its required quiet zone. |
| Which face? | The face presented at each reader after transfers and rotations; confirm whether more than one label is allowed and how identical or different codes are handled. |
| What can cover it? | Wrap folds, straps, adjacent cartons, overhang, dirt or a guide may block or change the view. Review the finished unit, not only the empty pallet. |
| What can damage it? | Contact with handling equipment, cleaning, storage and label replacement may affect the chosen surface and adhesive. Obtain a representative sample and agree the preparation method. |
| What rules apply? | Check the applicable barcode specification and trading-partner requirements separately from the installed reader's viewing range. |

For GS1 logistics labels, consult the current applicable GS1 rules and the trading partners: the [GS1 Logistic Label Guideline, section 8](https://ref.gs1.org/guidelines/logistic-label/), describes placement for logistic units. Its rules are not a universal instruction to put every reusable-pallet asset label at a single height, nor do they prove an individual AS/RS reader can see it.

## 3. Separate a no-read from a wrong or rejected read {#diagnosis}

At the designated safe station, retain the label, load orientation, event time and station ID. Where the system has them, ask the equipment owner for the reader image, decoded value, error and downstream system event. Do not reach into moving equipment or bypass guards, interlocks or the site's hold procedure.

| Observation | Next question |
| --- | --- |
| No image or no symbol in the image | Did the trigger occur, and was the intended face within the reader's view at that position? Ask the system owner to check its evidence. |
| Symbol visible but no decode | Is the full symbol and quiet zone visible and undamaged? Check folds, glare or obstruction against a comparable good label; ask the reader supplier to assess the image. |
| A value decoded but was rejected | Compare the exact value and format with the expected identity and station record. Was a carton code or old label read instead? |
| Correct value decoded, wrong load shown | Ask the warehouse-system owner to inspect the association and event sequence, including load build, separation and pallet reuse. |
| Intermittent results | Compare position, orientation, speed, label condition, wrap and lighting across accepted and rejected units before attributing a cause. |

[GS1's barcode quality guidance](https://support.gs1.org/support/solutions/articles/43000734141-what-should-i-check-to-ensure-good-quality-barcodes-) identifies quiet zones, contrast, damage, wrapping and placement as matters to check. [Cognex's DataMan diagnostics documentation](https://docs.cognex.com/dmst_2520/web/EN/DMST_QANDA/Content/Topics/idp10153570832.htm?TocPath=Optimize+Image%7C_____31) gives examples of clipped symbols, label folds and inadequate quiet zones for its own reader tools. Neither establishes the cause of a particular failure; use the installed equipment's documentation and event records.

## 4. Check print quality and the operational read separately {#verification}

A handheld scan can help compare two labels, but it is not a print-quality grade or a fixed-reader acceptance test. When a formal barcode quality assessment is required, ask the label supplier or qualified verifier for the applicable method and results. [GS1 explains](https://support.gs1.org/support/solutions/articles/43000734152-how-can-i-measure-the-quality-of-my-printed-barcodes-) that a compliant verifier measures symbol parameters and provides a grade; the required grade depends on the application. A good grade still does not establish that the installed reader sees the right code or that the warehouse record is correct.

## 5. Agree a representative trial and exception process {#trial}

With the system and packaging owners, record the pallet family, model and drawing revision, label specification, location and orientation, reader and station ID, and expected identity. Include a representative **finished loaded unit**, its actual wrap and labels, and an empty pallet where empty-return reading is required. Include permitted orientation and position variations, relevant transfer and rotation points, and the agreed operating sequence.

For each pass, retain the expected and actual decoded value, the station event and the resulting warehouse association. The system owner determines sample quantities, repeat counts and acceptance criteria for the project. If a code is unreadable or an unexpected value appears, hold and resolve it using the site's approved process. Do not adjust a reader or relabel goods outside the agreed procedure merely to make a unit pass. Keep the record with the [sample testing checklist]({{< relref "resources/insights/asrs-pallet-sample-testing-checklist.md" >}}), and review it if the label, pallet, wrap, reader or route changes.

## Prepare an enquiry {#enquiry}

Send the pallet supplier a marked drawing or photos of the intended label surface, pallet configuration, handling contacts, cleaning conditions and whether the label must remain with the reusable pallet. Send the system provider the route, reader positions, intended identity, finished-load photos and applicable label specification. [Contact BAOHENG]({{< relref "contact.md" >}}) to discuss candidate pallet configurations and the information needed for a sample review. Label or tag options and project compatibility must be confirmed for the order.

## Sources and scope {#sources}

- [GS1 Logistic Label Guideline](https://ref.gs1.org/guidelines/logistic-label/), release 1.3, July 2019, section 8: logistics-unit label placement; check current requirements for the application.
- [GS1: barcode quality checks](https://support.gs1.org/support/solutions/articles/43000734141-what-should-i-check-to-ensure-good-quality-barcodes-) and [barcode quality measurement](https://support.gs1.org/support/solutions/articles/43000734152-how-can-i-measure-the-quality-of-my-printed-barcodes-), updated 30 August 2024: print, packaging and verification considerations.
- [Cognex: Symbol Diagnostics](https://docs.cognex.com/dmst_2520/web/EN/DMST_QANDA/Content/Topics/idp10153570832.htm?TocPath=Optimize+Image%7C_____31), revision 25.2.0.12: manufacturer-specific examples of no-read diagnostics.

Sources reviewed 21 November 2026. The checklist is editorial guidance, not a reported BAOHENG test or universal acceptance standard.
