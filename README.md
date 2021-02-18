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

### ER model

* Entity Relationship model
* Diagram to structure high level requirements
![erd](img/erd.png)

### Tooling for Diagramming

* UMLet 
* LucidChart
* draw.io now app.diagrams.net(What I thought)

#### Step 1: Entities

* Determine what entities are in the System
* **What is an Entity**
  * A person/place or thing
  * Has a singular name
  * Has an Identifier
  * Should contain more than one instance of data

##### DriveMe Academy Entities

* Link: https://app.diagrams.net/#Hnuthanc%2Fwebdev%2Fdb_sd%2FDriveMe.drawio
* Student
* School(Branch)
* Instructor
* Vehicle
* For Maintenance, we frame questions like what would it hold
  * Date of maintenance(If only this were present, it could have been added in Vehicle entity)
  * What kind of maintenance
  * Who did it
  * Where did it happen
  * Since we have multiple columns, we have Maintenance also as an entity
* Exam
* Lesson

##### Relationships

* School has Instructor
* School has Student
* Student takes Lesson
* Instructor teaches Lesson
* Vehicle has Maintenance

#### Step 2: Attributes

* Give Entities the Information they will store
* **What are Attributes**
  * Must be a property of the entity
  * Must be Atomic
    * Narrowing down to the most small
  * Single/Multivalued (Phone NR)
  * Keys

##### Relation Schema and Instance

* Relation Schema is the Table Schema(Representation of data going into the table)
* For eg.: Relation Schema for User table is id, firstName, lastName, sex and dob
* Relation Instance is the set of data that relates to the Relation Schema
![rs](img/relation.png)

##### Relation Key

* Purpose: Uniquely identify each and every row in turn uniquely identify the relationship

##### Super Key

* **Any combination of attributes** that could uniquely identify a row
* Examples:
  * id and firstName
  * id and email
  * firstName and email
  * id, firstName and lastName
  * id, firstName, lastName and sec
  * etc

##### Candidate Key

* Subset of Super Key
* The **minimum amount of attributes** that are needed to uniquely identify a row
* Examples:
  * email
  * id

##### Primary Key

* Relation key that uniquely identifies the relationship
* 2 candidate keys: id and email

##### Foreign Key

* Reference a primary key from a different table
* Link manager to employees using managerId
![fk](img/fk.png)

##### Compound Key

* More than 1 column and that includes a foreign key uniquely identifying the data
![ck](img/ck.png)

##### Composite Key

* More than 1 column and that does not include the foreign key uniquely identifying the data
![ct](img/ct.png)

##### Surrogate Key

* Key which has Nothing to do with the individual's data
![sk](img/sk.png)

##### DriveMe Attributes(Author in GDocs)

* School
  * school_id, street_name, street_nr, postal_code, state, city
    * Note: address split into street...
* Instructor
  * instructor_id, first_name, last_name, date_of_birth, hiring_date, school_id
* Student
  * student_id, first_name, last_name, date_of_birth, *enrollment_date*, school_id
* Exam
  * student_id, instructor_id, date_taken, passed, lesson_id
* Lesson
  * lesson_id, date_of_enrollemnt, package, student_id

* From this foreign keys(student_id, instructor_id and lesson_id) we can come up with relationships(Exam linked to Student, Teacher and Lesson)
* If the client calls it Instructor, you also name the same

#### Step 3: Relationships

* Determine the Relationships between the Entities
* **What is a Relationship**
  * Links 2 Entities together:
    * 1 to 1
    * 1 to many
    * many to many
![cf](img/cf.png)
* In the above diagram,
  * 1st line after the Entity is the Relationship
    * Many sign
    * 1 sign
  * 2nd is the Constraint(circle means 0, 1 means 1)
    * 0 or more
    * 1 or more
    * 1 and only 1
    * 0 or 1

##### Overview of Entity, Attribute and Relationship
![ov](img/ov.png)

##### DriveMe Relationships

* School has many instructors, but Instructors teaches at one and only one School
* School has many Students, but Student attends one and only one School
* Instuctor can take multiple Lessons, but each Lesson is taught by only one and only Instructor
* Student can take multiple Lessons, but each Lesson belongs to only one and only Student
* Lesson can have multiple Exams(1 or 2), but an Exam can only be linked to one Lesson
* Lesson can have one and onle one Vehicle, Vehicle can belong to one or more multiple lessons
* Vehicle has 0 or more Maintenance, a Maintenance belongs to only one Vehicle
![r](img/r.png)
* There is no many to many relationships
* If Lesson was not in between, we could have had many to many relationship between Student and Instructor

#### Step 4: Many to Many

* In this Relational Model, it isn't possible to store a Many to Many Relationship
* Technically you can do it, but you really don't want to
* The reason for this is You create move overhead
  * Insert Overhead
  * Update Overhead
  * Delete Overhead
  * Potential Redundancy
* As a rule of thumb, always try to resolve Many to Many
![m2m](img/m2m.png)
  * Mistake in the above diagram, Instead of Many after Book, it should be one and only
* A book can have multiple Book authors, but a Book Author can belong to only one Book
![m2meg](img/m2meg.png)
* Think of creating a Intermediate type
  * Like Book Author
  * Or Lesson

#### Step 5: Subject Area

* Divide Entities into Logical Groups that are Related(Think Schemas)
* Subject Area Rules
  * All entities must belong to one
  * An entity can only belong to one
  * You can nest subject areas
![sa](img/sa.png)

### Exercise: Paintings

![pe](img/pe.png)
* Constraints:
  * A Painting can only have one Artist
* Questions about the System:
  * What's the goal of the system
    * Track Painting Reservations for a Wealthy man
  * Who are our Stakeholders
    * Owner, Museums

#### My Analysis
* Entities and Attributes
  * Painting: Id, Artist Id, Museum id, Date, Name
  * Museum: Id, Place
  * Reservation: Customer Id, Id, Museum Id, Date
  * Artist: Name, Place and Paintings(For this, I thought of another table containing Artist id to Painting id)
  * Customer: Id, Name, Place
* Relationships
  * Artist to Painting(One to Many)
  * Museum to Painting(One to Many)
  * Reservation to Customer(One to Many)

#### Instructor's Analysis
* Entities and Attributes
  * Painting: name, creation_date, style
  * Reservation: creation_date, date_from, date_to, accepted
  * Museum: name, address, phone_nr, email
  * Artist: name, birth_date, email
* Relationships
  * Artist to Painting(One to Many)
  * Painting to Reservation(Many to Many)
  * Museum to Reservation(One to Many)
![ex3](img/ex3.png)
* Solving Many to Many
![emtm](img/emtm.png)
* Subject Areas
  * Administration: Reservation, Reservation_Detail
  * Inventory: Painting, Artist
  * Client: Museum

### Exercise: Cinema

![cinema](img/cinema.png)
![cin_sol](img/cin_sol.png)
