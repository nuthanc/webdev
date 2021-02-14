# Database System Design

### SDLC(Software Development Life Cycle)

1.Phase 1
  * System Planning and Selection
  * Requirement Analysis
    * Info on What needs to be done

2.Phase 2
  * System Analysis
    * On time and budget

3.Phase 3
  * Design the System architecture
    * Databases, Apps etc

4.Phase 4
  * System Implementation and Operation
    * Building the Software and Testing

* Phase 1 and 2: Business people
* Phase 3 and 4: Developers

### Database Design

* Top Down
* Bottom Up

### Top Down

* Starting from Zero
* Optimal choice when creating a new Database
* All requirements are gathered Up-Front

### Bottom Up
* There's an existing system or specific data in place
* E.g Doctor and Symptoms
* Shape a **new system** around the **existing data**
* Optimal choice when migrating an existing database

### What to Use
* Often you'll end up using a bit of both

### Check DriveMe Academy video to learn about General SDLC planning and analysis

### Case Study of DriveMe Academy: Core Requirements

* There is a Vehicle Inventory for Students to Rent
* There are Employees at every branch
* There is maintenance for the vehicles
* Optional exam at the end of your lessons
* You can only take the exam twice, fail twice and you must take more lessons

### How do we model a database(What I thought)

* Vehicle Entity: (name, type, cid, status: maintenance, acquired, free)
* Employees: (eid, name, contact, address)
* Customer: (id, name, contact, address)
* Exam: (cid, status)

### Top down Design

* **Goal**: To Create a Data Model based on Requirements
* Requirements: What are we looking for?
  * High-Level Requirements
    * Based on communication with client
  * User Interviews
    * Talk with Users and get the Requirement
  * Data Collection
  * Deep Understanding
* **Key method**: ER-Modelling