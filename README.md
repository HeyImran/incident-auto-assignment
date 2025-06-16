# incident-auto-assignment
GlideRecord-based script to auto-assign incidents based on support groups.
# Incident Auto Assignment Script

This script uses GlideRecord to automatically assign unassigned incidents based on their assignment group.

## 🔧 How It Works

- Finds all new incidents with no assignee
- Fetches users in the assignment group
- Assigns to the first active user found

## 📜 Script

[View Script](./incidentAutoAssign.js)

## 🛠️ Technologies

![ServiceNow](https://img.shields.io/badge/-ServiceNow-0b5f19?logo=servicenow&logoColor=white)
![GlideRecord](https://img.shields.io/badge/-GlideRecord-0b5f19?logo=code&logoColor=white)
