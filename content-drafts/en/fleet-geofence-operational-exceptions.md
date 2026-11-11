---
slug: fleet-geofence-operational-exceptions
language: en
status: draft
title: "Using Geofences to Handle Delays and Operational Exceptions"
title_id: "Menggunakan Geofence untuk Menangani Keterlambatan dan Pengecualian Operasional"
category: "Fleet Operations"
---

A geofence marks when a vehicle's reported position enters or leaves a defined area. The team still needs to determine what the event means for operations, including whether a delay occurred and who needs to act.

We suggest starting with one geofence rule that has one follow-up owner, then adding areas once the first rule proves useful.

## Start with the event that needs attention

Choose one operational question to answer. For example:

- Has a vehicle reached the destination area?
- Did a vehicle leave a location before a process was complete?
- Should the team be notified when a trip passes a defined point?

Define what “arrived,” “left,” or “late” means in your process. Set area size and time tolerance to fit the location and workflow. A parking area, warehouse, and industrial site can have different shapes and conditions.

## Connect the event to an owner and an action

Before creating a notification, answer:

1. Who receives the event?
2. What should they check before acting?
3. What action can they take?
4. When is the event considered resolved?
5. How does the team handle an incorrect or duplicate notification?

Without follow-up, a notification only adds noise. If an event may prompt an important decision, give its recipient the necessary context, such as the vehicle, location, last update time, and related status. Provide a way to verify the information.

## Understand location-data limitations

Reported positions depend on the device and the conditions under which data is transmitted. Data may be delayed, infrequent, or have variable accuracy. Buildings, covered areas, device configuration, and connectivity can affect what is available. Therefore:

- distinguish when a position was recorded from when it was received;
- define what happens when a position is too old;
- consider tolerance or confirmation before sending an important alert;
- record ignored events so the rules can be reviewed;
- give operators a way to correct a status when the data is insufficient.

A position inside the polygon does not show that the business process is complete. Coordinates do not prove that goods were unloaded, documents were handed over, or a task was completed.

## Test operational scenarios

Before relying on a geofence, test normal and exceptional scenarios. Use synthetic data or data approved for the test, and document the test limits. Consider a vehicle stopping near the boundary, delayed location updates, repeated entries, and route changes. Review whether events occur according to the rules and whether recipients understand the expected action.

Also test what happens when a device or connection stops sending data. No event does not prove that the vehicle has not moved; it may mean data has not arrived.

## Decision checklist

- There is a specific operational decision to support.
- Event definitions and the follow-up owner are agreed.
- Data sources, update times, and accuracy limitations are known.
- Notifications include context and a correction path.
- Duplicate events, delayed data, and unavailable data are considered.
- The pilot has criteria for continuing, changing, or stopping the rules.

To assess geofencing for an arrival or exception workflow, [bring one past delay to a discussion with Akordium Lab](https://akordium.id/contact). From that example we can see whether a geofence helps or a procedure change is enough.
