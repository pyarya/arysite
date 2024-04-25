---
title: PillPal. Another 24-hour Hackathon Project.
description: We created a system that allows individuals to track their medication through an electronic pill box and and app.
author: aryan
image:
  url: ""
  alt: ""
pubDate: 2024-01-22
tags:
  - fun
  - projects
---


## Introduction
We made a pill tracker as a hackathon (HackED 2024) project to addresses medication management challenges. Significantly more useful than its predecessor... the [Shawarma Sheriff](/projects/shawarma-sheriff)

## Overview
The PillPal combines hardware components, including an Arduino and ESP32, connected to an easy-to-use app created through Google AppSheets that allows anyone to track their medication and recieve physical and digital reminders.

### Hardware Components:
- **Arduino**: Powers OLED screen to display medication details.
- **OLED Screen**: Displays upcoming medication details to the user.
- **Buzzer**: Provides audible reminders for medication intake.

### Software Components:
- **Google App Sheets**: Custom app created using AppSheets to track medication data.
- **CSV File**: Stores medication data for each user.
- **ESP32**: Communicates with Google App Sheets via the Google Workspace API to fetch medication data.
- **Serial Communication**: Connects the ESP32 to the Arduino to transmit medication data.

## How It Works
1. **Data Tracking**: Users input their medication details into the Google App Sheets app.
2. **Data Retrieval**: The ESP32 fetches medication data from the a spreadsheet and the Google Workspace API.
3. **Data Transmission**: The ESP32 communicates with the Arduino over serial to send medication data.
4. **Display**: The Arduino displays medication details on the OLED screen, including upcoming medication and dosage information.
5. **Reminder System**: The buzzer provides audible reminders to users when it's time to take their medication. Additionally, the user is sent an email reminder in case they are not near the physical device.

## Conclusion
 By integrating hardware and software components, we created a user-friendly solution that empowers individuals to stay on track with their medication regimen. With further development and refinement, I believe our project has the potential to make a positive impact on the lives of many. Unfortunately, I lost the documented photos for the physical aspect of the project, shown below are screenshots of the app and its functionality.

### Images
<div style="display:flex; flex-wrap: wrap;" >
  <img src="/images/blog/pill-tracker/medilist.webp" style="align-self:center" width="400">
    <img src="/images/blog/pill-tracker/tracking.webp" style="align-self:center" width="400">
  <img src="/images/blog/pill-tracker/trackingdetails.webp" style="align-self:center" width="400">
  <img src="/images/blog/pill-tracker/sidebar.webp" style="align-self:center" width="400">
</div>