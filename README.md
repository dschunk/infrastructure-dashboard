# Infrastructure Dashboard

> **Personal project notice:** This is a personal, sanitized demonstration project and is not affiliated with, sponsored by, or endorsed by any current or former employer. The repository is intended to contain only fictional/synthetic data and reusable interface ideas—not employer confidential or proprietary information, production configurations, customer data, credentials, or employer work product.

A public, sanitized case study for an operations dashboard that combines server health, service status, Windows events, storage, backups, tickets, messages, and administrative audit history.

## Interactive front-end concept

The repository now includes a dependency-free, responsive dashboard demonstration built with semantic HTML, modern CSS, and vanilla JavaScript. It includes synthetic telemetry, accessible navigation, responsive layouts, operational status cards, event triage, managed-system state, audit history, and a working refresh interaction.

It also includes an accessible command palette opened with Ctrl+K, searchable quick actions, a simulated incident lifecycle, clipboard-ready status summaries, and deliberate degraded-state communication.

Open index.html locally to explore it. Every value is fictional and exists only to demonstrate information architecture and interface design.

## Case-study scope

- Windows host connectivity, health, disk, and uptime
- Multi-instance service status
- Event and process visibility
- Storage and backup state
- Internal tickets and staff messages
- Role-based access and operational audit history

~~~mermaid
flowchart TD
    U[Authorized operator] --> W[ASP.NET Core dashboard]
    W --> A[Authentication and roles]
    W --> R[Remote management]
    W --> D[Operational data]
    R --> H[Windows hosts and services]
    W --> N[Alerts]
~~~

This repository contains no production source, credentials, addresses, hostnames, server keys, webhooks, or private infrastructure diagrams. A reference implementation will be published only after environment-specific behavior has been separated from reusable components.

Read operations should be separated from administrative actions. Consequential actions require authorization and audit records. Remote operations should use constrained identities, and secrets must be injected at runtime.

## Front-end qualities

- Responsive from desktop command-center layouts to mobile screens
- Keyboard-accessible skip navigation and semantic landmarks
- High-contrast status language that does not rely on color alone
- CSS variables and reusable layout primitives
- No framework, build step, analytics, cookies, or production dependencies
- Synthetic data clearly separated from real operational systems
- Keyboard-driven command palette and searchable operator actions
- Interactive incident simulation and recovery state
- Clipboard-ready operational status communication
