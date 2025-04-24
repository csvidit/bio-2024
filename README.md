# bio-2024

A very simple link-in-bio website.

## Tech Stack
* Next.js
* Tailwind CSS
* Trimr URL shortener service and analytics for link clicks
* Firestore for custom analytics

## Analytics

This website uses a custom analytics script to record detailed page views data and stored them in Firestore. This is the data it tracks:
* Browser
* Browser Version
* City
* Country
* IP Address (for geolocation purposes, to see where my audience is coming from)
* Latitude
* Longitude
* OS
* OS Version
* Query Params
* Referrer
* Referring URL
* Referrer Type
* Timestamp
* User Agent (for example, if the user is using a Mac or Windows device)

**No data is ever used for marketing or sold to third parties. The purpose of custom analytics is precisely to prevent that.**

## Enhancements Coming Soon
* Connection with a database or CMS for link fetching
