DROP DATABASE IF EXISTS HelpX;
CREATE DATABASE HelpX;
USE HelpX;
SET
  NAMES utf8;
-- Users table
  CREATE TABLE IF NOT EXISTS Users(
    ID INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(40) NOT NULL,
    Email VARCHAR(50),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY(ID)
  );
  -- Applications Table
  CREATE TABLE IF NOT EXISTS Applications (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(25),
    URL VARCHAR(25),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID)
  );
  -- LookupUserRoles table
  CREATE TABLE IF NOT EXISTS LookupUserRoles(
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(25),
    Description VARCHAR(50),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID)
  );
  -- LookupAppAttributes table
  CREATE TABLE IF NOT EXISTS LookupAppAttributes (
    ID Int NOT NULL AUTO_INCREMENT,
    Name Varchar(25),
    Description Varchar(50),
    DefaultValue Varchar(20),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY (ID)
  );
  -- LookupAuditLogActions table
  CREATE TABLE IF NOT EXISTS LookupAuditLogActions (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(20),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY(ID)
  );
  -- LookupAuditLogObjects table
  CREATE TABLE IF NOT EXISTS LookupAuditLogObjects(
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(30),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY(ID)
  );
  -- LookupContentTypes table
  CREATE TABLE IF NOT EXISTS LookupContentTypes(
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(25),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID)
  );
  -- LookupNotificationTypes table
  CREATE TABLE IF NOT EXISTS LookupNotificationTypes(
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR (25) NOT NULL,
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID)
  );
-- LookupStatuses table
  CREATE TABLE IF NOT EXISTS LookupStatuses(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar (25),
    Description varchar (70),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY (ID)
  );
  -- FraudManagement table
  CREATE TABLE IF NOT EXISTS FraudManagement(
    ID int NOT NULL AUTO_INCREMENT,
    Term varchar(25),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY(ID)
  );
  -- UsersApplications table
  CREATE TABLE IF NOT EXISTS UsersApplications(
    ID INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL,
    AppID INT NOT NULL,
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY(ID),
    CONSTRAINT FK_UsersApplications_UserID FOREIGN KEY (UserID) REFERENCES Users(ID),
    CONSTRAINT FK_UsersApplications_AppID FOREIGN KEY (AppID) REFERENCES Applications(ID)
  );
  -- UsersAppsRoles table
  CREATE TABLE IF NOT EXISTS UsersAppsRoles(
    ID int NOT NULL AUTO_INCREMENT,
    UserAppID int,
    UserRoleID int,
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID),
    CONSTRAINT FK_UsersAppsRoles_UserAppID FOREIGN KEY (UserAppID) REFERENCES UsersApplications(ID),
    CONSTRAINT FK_UsersAppsRoles_UserRoleID FOREIGN KEY (UserRoleID) REFERENCES LookupUserRoles (ID)
  );
  -- Bookmarks table
  CREATE TABLE IF NOT EXISTS Bookmarks (
    ID int NOT NULL AUTO_INCREMENT,
    UserID int NOT NULL,
    URL varchar(50),
    BookmarkName varchar(50),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY(ID),
    CONSTRAINT FK_Bookmarks_UsersID FOREIGN KEY (UserID) REFERENCES Users (ID)
  );
  -- Contents table
  CREATE TABLE IF NOT EXISTS Content(
    ID INT NOT NULL AUTO_INCREMENT,
    AppID INT,
    UserID INT,
    ContentTypeID INT,
    StatusID INT,
    IsFeebackAllowed BOOLEAN,
    IsVisible BOOLEAN,
    Title VARCHAR(64),
    Body MEDIUMTEXT,
    DateCreated DATETIME,
    DateModified DATETIME,
    DatePublished DATETIME,
    PRIMARY KEY(ID),
    CONSTRAINT FK_Content_AppID FOREIGN KEY (AppID) REFERENCES Applications(ID),
    CONSTRAINT FK_Content_UserID FOREIGN KEY (UserID) REFERENCES Users(ID),
    CONSTRAINT FK_Content_ContentTypeID FOREIGN KEY (ContentTypeID) REFERENCES LookupContentTypes(ID),
    CONSTRAINT FK_Content_StatusID FOREIGN KEY (StatusID) REFERENCES LookupStatuses(ID)
  );
  -- ApplicationAttributes table
  CREATE TABLE IF NOT EXISTS ApplicationsAttributes (
    ID int NOT NULL AUTO_INCREMENT,
    AppID INT NOT NULL,
    AttributeID INT NOT NULL,
    AppAttributeValue varchar(20),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY (ID),
    CONSTRAINT FK_ApplicationsAttributes_AppID FOREIGN KEY (AppID) REFERENCES Applications(ID),
    CONSTRAINT FK_ApplicationsAttributes_AttributeID FOREIGN KEY (AttributeID) REFERENCES LookupAppAttributes(ID)
  );
  -- AuditLogs table
  CREATE TABLE IF NOT EXISTS AuditLogs (
    ID INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL,
    ActionID INT NOT NULL,
    DateCreated DATETIME,
    PRIMARY KEY(ID),
    CONSTRAINT FK_AuditLogs_UserID FOREIGN KEY (UserID) REFERENCES Users(ID),
    CONSTRAINT FK_AuditLogs_ActionID FOREIGN KEY (ActionID) REFERENCES LookupAuditLogActions(ID)
  );
  -- AuditLogsObjects table
  CREATE TABLE IF NOT EXISTS AuditLogObjects(
    ID INT NOT NULL AUTO_INCREMENT,
    AuditLogID INT NOT NULL,
    ObjectID INT NOT NULL,
    ObjectValue VARCHAR(25),
    DateCreated DATETIME,
    PRIMARY KEY(ID),
    CONSTRAINT FK_AuditLogObjects_AuditLogID FOREIGN KEY (AuditLogID) REFERENCES AuditLogs(ID),
    CONSTRAINT FK_AuditLogObjects_ObjectID FOREIGN KEY (ObjectID) REFERENCES LookupAuditLogObjects(ID)
  );
  -- FAQ table
  CREATE TABLE IF NOT EXISTS FAQ(
    ID int NOT NULL AUTO_INCREMENT,
    AppID int NOT NULL,
    Question varchar(255),
    Answer varchar(255),
    IsFeedbackAllowed boolean,
    IsVisible boolean,
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY(ID),
    CONSTRAINT FK_FAQ_AppID FOREIGN KEY (AppID) REFERENCES Applications(ID)
  );
  -- FAQHistory table
  CREATE TABLE IF NOT EXISTS FAQHistory (
    ID int NOT NULL AUTO_INCREMENT,
    UserID int,
    FAQID int,
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY (ID),
    CONSTRAINT FK_FAQHistory_UserID FOREIGN KEY (UserID) REFERENCES Users (ID),
    CONSTRAINT FK_FAQHistory_FAQID FOREIGN KEY (FAQID) REFERENCES FAQ (ID)
  );
-- Feedback table
  CREATE TABLE IF NOT EXISTS Feedback (
    ID int NOT NULL AUTO_INCREMENT,
    ContentID int NOT NULL,
    UserID int NOT NULL,
    Feedback varchar(1024),
    Rating int,
    DateCreated datetime,
    PRIMARY KEY(ID),
    CONSTRAINT FK_Feedback_ContentID FOREIGN KEY (ContentID) REFERENCES Content(ID),
    CONSTRAINT FK_Feedback_UserID FOREIGN KEY (UserID) REFERENCES UsersApplications(UserID)
  );
  -- Notifications table
  CREATE TABLE IF NOT EXISTS Notifications(
    ID int NOT NULL AUTO_INCREMENT,
    TypeID int NOT NULL,
    UserAppID int NOT NULL,
    Body Varchar(500),
    IsRead Boolean,
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID),
    CONSTRAINT FK_Notifications_TypeID FOREIGN KEY (TypeID) REFERENCES LookupNotificationTypes(ID),
    CONSTRAINT FK_Notifications_UserAppID FOREIGN KEY (UserAppID) REFERENCES UsersApplications(ID)
  );
-- Templates table
  CREATE TABLE IF NOT EXISTS Templates (
    ID int NOT NULL AUTO_INCREMENT,
    AppID int NOT NULL,
    UserID int NOT NULL,
    Title varchar(64),
    Body varchar(10256),
    DateCreated datetime,
    DateModified datetime,
    PRIMARY KEY(ID),
    CONSTRAINT FK_Templates_AppID FOREIGN KEY(AppID) REFERENCES Applications(ID),
    CONSTRAINT FK_Templates_UserID FOREIGN KEY(UserID) REFERENCES Users(ID)
  );
CREATE TABLE IF NOT EXISTS ContentFiles (
    ID INT NOT NULL AUTO_INCREMENT,
    ContentID INT NOT NULL,
    FilePath VARCHAR(50),
    DateCreated DATETIME,
    DateModified DATETIME,
    PRIMARY KEY (ID),
    CONSTRAINT FK_ContentFiles_contentid FOREIGN KEY (contentid) REFERENCES content(ID)
  );
-- ************************** -- 
--     DUMMY DATA SCRIPTS     --
-- ************************** --

-- Users
INSERT INTO
  users(
    FirstName,
    LastName,
    Email,
    DateCreated,
    DateModified
  )
SELECT
  'Alif',
  'Muqri Hazmi',
  'alifmuqri.hazmi@petronas.com.my',
  '2021-11-06 12:12:12',
  '2021-11-07 12:12:12'
FROM
  DUAL
WHERE
  not EXISTS (
    SELECT
      Email
    FROM
      Users
    WHERE
      Email = 'alifmuqri.hazmi@petronas.com.my'
  );
-- Applications
INSERT INTO
  applications(Name, URL, DateCreated, DateModified)
SELECT
  'AlphaOil',
  'alphaoil',
  '2021-11-02 12:12:12',
  '2021-11-03 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      applications
    WHERE
      Name = 'AlphaOil'
  );
-- LookupUserRoles
INSERT INTO
  lookupuserroles(Name, Description, DateCreated, DateModified)
SELECT
  'End User',
  'Only consume content',
  '2021-11-06 12:12:12',
  '2021-11-06 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      name
    FROM
      lookupuserroles
    WHERE
      Name = 'End User'
  );
INSERT INTO
  lookupuserroles(Name, Description, DateCreated, DateModified)
SELECT
  'Content Contributor',
  'Incharge of submitting contents to the application',
  '2021-11-06 12:12:12',
  '2021-11-06 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      name
    FROM
      lookupuserroles
    WHERE
      Name = 'Content Contributor'
  );
INSERT INTO
  lookupuserroles(Name, Description, DateCreated, DateModified)
SELECT
  'Content Approver',
  'Incharge of approving contents to the application',
  '2021-11-06 12:12:12',
  '2021-11-06 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      name
    FROM
      lookupuserroles
    WHERE
      Name = 'Content Approver'
  );
INSERT INTO
  lookupuserroles(Name, Description, DateCreated, DateModified)
SELECT
  'System Admin',
  'Administor the system',
  '2021-11-06 12:12:12',
  '2021-11-06 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      name
    FROM
      lookupuserroles
    WHERE
      Name = 'System Admin'
  );
  -- FraudManagement
  INSERT INTO
  fraudmanagement(Term, DateCreated, DateModified)
SELECT
  'Shit',
  '2021-02-22 08:30:45',
  '2021-11-05 14:30:00'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Term
    FROM
      fraudmanagement
    WHERE
      Term = 'Shit'
  );
  -- LookupContentTypes
INSERT INTO
  lookupcontenttypes(Name, DateCreated, DateModified)
SELECT
  'Release Note',
  '2021-05-15 11:05:24',
  '2021-05-25 09:30:15'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupcontenttypes
    WHERE
      Name = 'Release Note'
  );
INSERT INTO
  lookupcontenttypes(Name, DateCreated, DateModified)
SELECT
  'Documentation',
  '2021-11-13 09:11:12',
  '2021-12-01 11:07:21'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupcontenttypes
    WHERE
      Name = 'Documentation'
  );
-- LookupNotificationTypes
INSERT INTO
  LookupNotificationTypes (Name, DateCreated, DateModified)
SELECT
  'Feedback',
  '2021-11-11 12:12:12',
  '2021-11-21 13:10:25'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupNotificationTypes
    WHERE
      Name = 'Feedback'
  );
INSERT INTO
  LookupNotificationTypes (Name, DateCreated, DateModified)
SELECT
  'Message',
  '2021-12-10 12:15:17',
  '2021-12-21 10:10:25'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupNotificationTypes
    WHERE
      Name = 'Message'
  );
INSERT INTO
  LookupNotificationTypes (Name, DateCreated, DateModified)
SELECT
  'Content Status',
  '2021-12-10 12:15:17',
  '2021-12-21 10:10:25'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupNotificationTypes
    WHERE
      Name = 'Content Status'
  );
-- LookupStatuses
INSERT INTO
  lookupstatuses (Name, Description, DateCreated, DateModified)
SELECT
  "In Draft",
  "incomplete content saved in draft",
  "2021-07-28 12:12:12",
  "2021-07-30 12:12:12"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupstatuses
    WHERE
      Name = "In Draft"
  );
INSERT INTO
  lookupstatuses (Name, Description, DateCreated, DateModified)
SELECT
  'Sent for approval',
  'Content sent to approver',
  '2021-08-08 12:12:12',
  '2021-08-20 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupstatuses
    WHERE
      Name = "Sent for approval"
  );
INSERT INTO
  lookupstatuses(Name, Description, DateCreated, DateModified)
SELECT
  'Sent for revision',
  'Changes to be made after rejection by approver',
  '2021-09-10 12:12:12',
  '2021-09-27 14:14:14'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupstatuses
    WHERE
      Name = "Sent for revision"
  );
INSERT INTO
  lookupstatuses (Name, Description, DateCreated, DateModified)
SELECT
  'Approved',
  'Content has been approved and ready to be published',
  '2021-10-11 13:14:13',
  '2021-10-15 10:10:15'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      lookupstatuses
    WHERE
      Name = "Approved"
  );
-- LookupAuditActions
INSERT INTO
  LookupAuditLogActions (Name, DateCreated, DateModified)
SELECT
  "Create",
  "2021-11-16 12:10:03",
  "2021-11-16 12:10:03"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogActions
    WHERE
      Name = "Create"
  );
INSERT INTO
  LookupAuditLogActions (Name, DateCreated, DateModified)
SELECT
  "Remove",
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogActions
    WHERE
      Name = "Remove"
  );
INSERT INTO
  LookupAuditLogActions (Name, DateCreated, DateModified)
SELECT
  "Update",
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogActions
    WHERE
      Name = "Update"
  );
INSERT INTO
  LookupAuditLogActions (Name, DateCreated, DateModified)
SELECT
  "Assign",
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogActions
    WHERE
      Name = "Assign"
  );
INSERT INTO
  LookupAuditLogActions (Name, DateCreated, DateModified)
SELECT
  "Grant",
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogActions
    WHERE
      Name = "Grant"
  );
-- LookupAppAttributes
INSERT INTO
  lookupappattributes (
    Name,
    Description,
    DefaultValue,
    DateCreated,
    DateModified
  )
SELECT
  'Background Color',
  'Value of background color',
  '26AFAB',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      lookupappattributes
    WHERE
      Name = 'Background Color'
  );
INSERT INTO
  lookupappattributes (
    Name,
    Description,
    DefaultValue,
    DateCreated,
    DateModified
  )
SELECT
  'Font Size',
  'Size of font used in application',
  '12',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      lookupappattributes
    WHERE
      Name = 'Font Size'
  );
INSERT INTO
  lookupappattributes (
    Name,
    Description,
    DefaultValue,
    DateCreated,
    DateModified
  )
SELECT
  'Font Family',
  'Font used for the application',
  'Sans Serif',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      lookupappattributes
    WHERE
      Name = 'Font Family'
  );
INSERT INTO
  lookupappattributes (
    Name,
    Description,
    DefaultValue,
    DateCreated,
    DateModified
  )
SELECT
  'Theme',
  'Generic theme used for the application',
  'Default',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      lookupappattributes
    WHERE
      Name = 'Theme'
  );
INSERT INTO
  lookupappattributes (
    Name,
    Description,
    DefaultValue,
    DateCreated,
    DateModified
  )
SELECT
  'Navigation Bar',
  'The orientation of navigation bar',
  'Left Vertical',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      Name
    FROM
      lookupappattributes
    WHERE
      Name = 'Navigation Bar'
  );
-- LookupAuditLogObjects
  -- UserID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  'UserID',
  '2021-11-16 11:01:11',
  '2021-11-16 11:01:11'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "UserID"
  );
-- First Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "FirstName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "FirstName"
  );
-- Last Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "LastName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "LastName"
  );
-- User Role ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "UserRoleID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "UserRoleID"
  );
-- User Role Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "UserRoleName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "UserRoleName"
  );
-- User Role Description
  INSERT INTO LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "UserRoleDescription",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "UserRoleDescription"
  );
-- Application ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "AppID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "AppID"
  );
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "ApplicationName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "ApplicationName"
  );
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "ApplicationAttributeID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "ApplicationAttributeID"
  );
-- Attribute Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "AttributeName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "AttributeName"
  );
-- Attribute Value
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "AttributeValue",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "AttributeValue"
  );
-- Status ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "StatusID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "StatusID"
  );
-- Status Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "StatusName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "StatusName"
  );
-- Content Type ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "ContentTypeID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "ContentTypeID"
  );
-- Content Type
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "ContentType",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "ContentType"
  );
-- Notification ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "NotificationID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "NotificationID"
  );
-- Notification Type
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "NotificationType",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "NotificationType"
  );
-- Fraud ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "FraudID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "FraudID"
  );
-- Fraud Term
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "FraudTerm",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "FraudTerm"
  );
-- Template Name
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "TemplateName",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "TemplateName"
  );
-- Template ID
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "TemplateID",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "TemplateID"
  );
-- Template Title
INSERT INTO
  LookupAuditLogObjects (Name, DateCreated, DateModified)
SELECT
  "TemplateTitle",
  "2021-11-16 11:01:11",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Name
    FROM
      LookupAuditLogObjects
    WHERE
      Name = "TemplateTitle"
  );
  -- UsersApplications
  INSERT INTO
  usersapplications(userid, appid, datecreated, datemodified)
SELECT
  '1',
  '1',
  '2021-11-07 12:12:12',
  '2021-11-08 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      USERID,
      APPID
    FROM
      usersapplications
    WHERE
      USERID = 1
      AND APPID = 1
  );
  -- usersappsroles
INSERT INTO
  UsersAppsRoles(UserAppID, UserRoleID, DateCreated, DateModified)
SELECT
  '1',
  '1',
  '2021-11-06 11:11:11',
  '2021-11-06 11:11:11'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      UserAppID,
      UserRoleID
    FROM
      UsersAppsRoles
    WHERE
      UserAppID = '1'
      AND UserRoleID = '1'
  );
  -- ApplicationsAttributes
INSERT INTO
  applicationsattributes (
    AppID,
    AttributeID,
    AppAttributeValue,
    DateCreated,
    DateModified
  )
SELECT
  '1',
  '1',
  'red',
  "2021-11-16 12:15:03",
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      AppID,
      AttributeID
    FROM
      applicationsattributes
    WHERE
      AppID = 1
      AND AttributeID = 1
  );
  -- FAQ
INSERT INTO
  FAQ(
    AppID,
    Question,
    Answer,
    IsFeedbackAllowed,
    IsVisible,
    DateCreated,
    DateModified
  )
SELECT
  1,
  'What is a release note?',
  'Release notes are documents that are distributed with software products',
  1,
  1,
  '2021-02-22 08:30:45',
  '2021-11-05 14:30:00'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      AppID,
      question
    FROM
      faq
    WHERE
      AppID = '1'
      AND question = 'What is a release note?'
  );
  -- FAQHistory
INSERT INTO
  FAQHistory(UserID, FAQID, DateCreated, DateModified)
SELECT
  '1',
  '1',
  '2021-11-11 10:10:10',
  '2021-12-12 03:03:03'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      UserID,
      FAQID
    FROM
      FAQHistory
    WHERE
      UserID = 1
      AND FAQID = 1
  );
  -- Content
  INSERT INTO
  content (
    AppID,
    UserID,
    ContentTypeID,
    StatusID,
    IsFeebackAllowed,
    IsVisible,
    Title,
    Body,
    DateCreated,
    DateModified,
    DatePublished
  )
SELECT
  1,
  1,
  1,
  1,
  1,
  1,
  'Release Note 11.1',
  "<h2>Audit Log Notes</h2>
    <p>A CREATE USER statement BY 'auth_string' clause was written to the audit log and general query log as an AS 'auth_string' clause. (Bug #33184550)</p>
    <h2>Authentication Notes</h2>
    <p>Previously, MySQL user accounts authenticated to the server using a single authentication method. MySQL now supports multifactor authentication (MFA), which makes it possible to create accounts that have up to three authentication methods. MFA support entails these changes:</p>
    <p></p>
    <p>CREATE USER and ALTER USER syntax has been extended to permit specification of multiple authentication methods.</p>
    ",
  '2021-11-18 00:00:00',
  '2021-11-19 00:00:00',
  '2021-11-20 00:00:00'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Title
    FROM
      content
    WHERE
      Title = 'Release Note 11.1'
  );
  -- Feedback
INSERT INTO
  Feedback(ContentID, UserID, Feedback, Rating, DateCreated)
SELECT
  '1',
  '1',
  'This application is good for us to see changes applied on the system',
  '5',
  '2021-11-06 11:11:11'
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      UserID,
      ContentID
    FROM
      Feedback
    WHERE
      UserID = 1
      AND ContentID = 1
  );
  -- Bookmark
INSERT INTO
  bookmarks(UserID, URL, BookmarkName, DateCreated, DateModified)
SELECT
  '1',
  'helpx.petronas.com/releasenote1.1',
  'Name',
  '2021-11-02 12:12:12',
  '2021-11-03 12:12:12'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      UserID
    FROM
      bookmarks
    WHERE
      UserID = '1'
      AND URL = 'helpx.petronas.com/releasenote.1.1'
  );
  -- AuditLogs
INSERT INTO
  auditlogs (UserID, ActionID, DateCreated)
SELECT
  '1',
  '2',
  "2021-11-16 12:15:03"
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      UserID,
      ActionID
    FROM
      auditlogs
    WHERE
      UserID = 1
      AND ActionID = 2
  );
  -- AuditLogObjects
INSERT INTO
  AuditLogObjects (AuditLogID, ObjectID, ObjectValue, DateCreated)
SELECT
  "1",
  "1",
  "Jenny",
  "2021-11-16 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      auditlogid
    FROM
      AuditLogObjects
    WHERE
      AuditLogID = 1
  );
  -- Notification
  INSERT INTO
  Notifications(
    TypeID,
    UserAppID,
    Body,
    IsRead,
    DateCreated,
    DateModified
  )
SELECT
  '1',
  '1',
  'Release notes Version 6.0 has been approved',
  '1',
  '2021-10-20 13:05:43',
  '2021-11-25 08:26:02'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      UserAppID,
      Body
    FROM
      Notifications
    WHERE
      UserAppID = 1
      AND Body = 'Release notes Version 6.0 has been approved'
  );
  -- Templates
INSERT INTO
  Templates(
    AppID,
    UserID,
    Title,
    Body,
    DateCreated,
    DateModified
  )
SELECT
  "1",
  "1",
  "TemplateName",
  "Content of template",
  "2021-11-04 09:23:11",
  "2021-11-15 11:01:11"
FROM
  DUAL
WHERE
  NOT EXISTS (
    SELECT
      Title,
      UserID
    FROM
      Templates
    WHERE
      Title = "TemplateName"
      AND UserID = 1
  );
  -- contentFiles
  INSERT INTO
  ContentFiles(ContentID, FilePath, DateCreated, DateModified)
SELECT
  '1',
  'img/Notes1/22015.png',
  '2021-10-20 13:05:43',
  '2021-11-25 08:26:02'
FROM
  DUAL
WHERE
  NOT EXISTS(
    SELECT
      FilePath
    FROM
      contentfiles
    WHERE
      FilePath = 'img/Notes1/22015.png'
  );
  
-- ************************************************* --
--                 Stored Procedure                  --
-- ************************************************* --

DROP PROCEDURE IF EXISTS `sp_applications_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_applications_sel`()
BEGIN
select id, name ,url, datecreated, datemodified from applications;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_applications_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_applications_ins`(
IN name varchar(25), url varchar(25), datecreated datetime, datemodified datetime)
BEGIN
INSERT INTO applications (name,url,datecreated,datemodified)
VALUES (name,url,datecreated,datemodified);
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_applications_del`;
DELIMITER $$
CREATE PROCEDURE `sp_applications_del`(IN id int)
BEGIN
DELETE FROM applications AS ap
WHERE ap.id = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_applications_upd`;
DELIMITER $$
CREATE PROCEDURE `sp_applications_upd`(
IN id int, name varchar(25), url varchar(25), datemodified datetime)
BEGIN
UPDATE applications as ap
SET ap.name = name, ap.url = url, ap.datemodified = datemodified
WHERE ap.id = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_contentdb_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_contentdb_sel`()
BEGIN
    SELECT ct.ID as id,
    ct.IsFeebackAllowed,
    ct.IsVisible,
    ct.Title,
    ct.DateCreated,
    ct.DatePublished,
    COUNT(fb.ID) as feedback,
    ls.Name as status
    FROM content as ct
    LEFT JOIN feedback as fb
        ON ct.ID  = fb.contentID
    LEFT JOIN lookupstatuses as ls
        ON ct.StatusID = ls.ID
    GROUP BY ct.ID;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_bookmarks_sel_user`;
DELIMITER $$
CREATE PROCEDURE `sp_bookmarks_sel_user`(IN UserID INT)
BEGIN
    SELECT bm.ID,
    bm.UserID,
    bm.URL,
    bm.BookmarkName,
    bm.DateCreated,
    bm.DateModified from Bookmarks AS bm where bm.UserID = UserID;
    
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_bookmarks_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_bookmarks_ins`(IN UserID INT, URL varchar(50), BookmarkName varchar(50), DateCreated datetime, DateModified datetime)
BEGIN
    	INSERT INTO bookmarks (UserID, URL, BookmarkName, datecreated, datemodified)
    VALUES (UserID, URL, BookmarkName, now(), now());
    END $$
    DELIMITER ;

    
  
DROP PROCEDURE IF EXISTS `sp_bookmarks_sel_all`;
DELIMITER $$

CREATE PROCEDURE `sp_bookmarks_sel_all`()
BEGIN
    SELECT ID,
    UserID,
    URL,
    BookmarkName,
    DateCreated,
    DateModified from Bookmarks;
    
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_bookmarks_del`;
DELIMITER $$
CREATE PROCEDURE `sp_bookmarks_del`(IN ID INT)
BEGIN
    DELETE FROM bookmarks AS bm
    WHERE bm.ID = ID;
    
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_bookmarks_upd`;
DELIMITER $$

CREATE PROCEDURE `sp_bookmarks_upd`(IN BookmarkName varchar(50), ID INT, DateModified datetime)
BEGIN
    UPDATE bookmarks AS bm
    SET bm.BookmarkName = BookmarkName, bm.DateModified = DateModified
    WHERE bm.id = ID;
    
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_template_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_template_ins` (
	IN appid INT, userid INT, title varchar(65), body varchar(10256), datecreated datetime, datemodified datetime
)
BEGIN 
	INSERT INTO templates (appid, userid, title, body, datecreated, datemodified)
    VALUES (appid, userid, title, body, now(), now());
    END $$
    DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_ReleaseNotes_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_ReleaseNotes_sel`()
BEGIN
SELECT ct.ID as id,
ct.Title,
ct.Body
FROM content as ct
LEFT JOIN Applications as app
ON ct.AppID = app.ID
WHERE ContentTypeID = 1; 
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_auditlogs_sel`
DELIMITER $$
CREATE PROCEDURE `sp_auditlogs_sel_byuserid`()
BEGIN
    SELECT al.ID as id,
    al.UserID,
    al.ActionID,
    al.DateCreated
    FROM auditlogs as al;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_content_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_content_ins` (
	IN appid int, userid int, contenttypeid int, statusid int, 
    isfeebackallowed boolean, isvisible boolean, title varchar(65), 
    body varchar(10256), datecreated datetime, datemodified datetime, datepublished datetime
)
BEGIN 
	INSERT INTO content (appid, userid, contenttypeid, statusid, isfeebackallowed,
    isvisible, title, body, datecreated, datemodified, datepublished)
    VALUES (appid, userid, contenttypeid, statusid, isfeebackallowed,
    isvisible, title, body, datecreated, datemodified, datepublished);
    END $$
    DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_content_upd`;
DELIMITER $$
CREATE PROCEDURE `sp_content_upd` (
	IN appid int, userid int, contenttypeid int, statusid int, 
    isfeebackallowed boolean, isvisible boolean, title varchar(65), 
    body varchar(10256), datecreated datetime, datemodified datetime, datepublished datetime
)
BEGIN 
  UPDATE content as c
    SET c.appid = appid, c.userid = userid, c.contenttypeid = contenttypeid, 
    c.statusid = contenttypeid, c.isfeebackallowed = isfeebackallowed, c.isvisible = isvisible, 
    c.title = title, c.body = body, c.datecreated = datecreated, 
    c.datemodified = datemodified, c.datepublished = datepublished 
    WHERE c.id = id;
    END $$
    DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_content_del`;
DELIMITER $$
CREATE PROCEDURE `sp_content_del`(IN id int)
BEGIN
DELETE FROM content as c
WHERE c.id = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_fraudmanagement_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_fraudmanagement_sel`()
BEGIN
    SELECT ID, Term
    FROM fraudmanagement;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_users_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_users_sel`()
BEGIN
    SELECT ID,
    FirstName,
    LastName,
    Email,
    DateCreated,
    DateModified
    FROM users;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_users_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_users_ins`(
IN FirstName varchar(20), LastName varchar(40), Email varchar(50), DateCreated datetime, datemodified datetime)
BEGIN
INSERT INTO users (FirstName, LastName, Email, DateCreated, DateModified)
VALUES (FirstName, LastName, Email, DateCreated, DateModified);
END $$
DELIMITER ; 

DROP PROCEDURE IF EXISTS `sp_users_del`;
DELIMITER $$
CREATE PROCEDURE `sp_users_del`(IN id int)
BEGIN
DELETE FROM users AS u
WHERE u.id = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_faq_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_faq_ins`(
IN appid int, question varchar(255), answer varchar(255), isvisible boolean, datecreated datetime, datemodified datetime)
BEGIN
INSERT INTO faq (appid,question,answer,datecreated,datemodified)
VALUES (appid,question,answer,datecreated,datemodified);
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_faq_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_faq_sel`()
BEGIN
    SELECT ID,
    AppID,
    Question,
    Answer,
    IsFeedbackAllowed,
    IsVisible,
    DateCreated,
    DateModified
    FROM faq;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_feedback_sel_user`;
DELIMITER $$
CREATE PROCEDURE `sp_feedback_sel_user`()
BEGIN
    SELECT fb.ID,
    fb.UserID,
    fb.ContentID,
    fb.Feedback,
    fb.Rating,
    fb.DateCreated,
    ct.title
    FROM feedback as fb
    LEFT JOIN content as ct
        ON fb.ContentID  = ct.ID;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_notifications_del`;
DELIMITER $$
CREATE PROCEDURE `sp_notifications_del`(IN id int)
BEGIN
DELETE FROM Notifications AS na
WHERE na.id = id;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_notifications_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_notifications_sel`()
BEGIN
    SELECT 
    ID,
    TypeID,
    UserAppID,
    Body,
    IsRead,
    DateCreated,
    DateModified
    FROM Notifications;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_contentfiles_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_contentfiles_ins` (
	IN contentid int, filepath varchar(50), datecreated datetime, datemodified datetime
)
BEGIN 
	INSERT INTO contentfiles (contentid, filepath, datecreated, datemodified)
    VALUES (contentid, filepath, datecreated, datemodified);
    END $$
    DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_lookupuserroles_sel`;
DELIMITER $$
CREATE PROCEDURE `sp_lookupuserroles_sel`()
BEGIN
    SELECT ID,
   Name,
    Description,
    DateCreated,
    DateModified
    FROM lookupuserroles;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS `sp_lookupuserroles_ins`;
DELIMITER $$
CREATE PROCEDURE `sp_lookupuserroles_ins`(
IN id int, name varchar(25), description varchar(50), datecreated datetime, datemodified datetime)
BEGIN
INSERT INTO lookupuserroles (id,name,description,datecreated,datemodified)
VALUES (id, name, description, datecreated,datemodified) ;
END $$
DELIMITER ;

-- ************************************************* --
--              Call Stored Procedure                --
-- ************************************************* --
CALL sp_applications_sel();
CALL sp_contentdb_sel();
CALL sp_bookmarks_sel_all();
CALL sp_template_ins(1,1,'Release Note 1','Here are some details on..', now(), now());
CALL sp_auditlogs_sel_byuserid();

CALL sp_ReleaseNotes_sel();

CALL sp_content_ins(1, 1, 1, 1, true, true, 'Release Note 5.0', 'This is a new Release Notes', now(), now(), '2021-11-20 00:00:00');

CALL sp_content_upd(1, 1, 1, 1, true, false, 'Release Note 6.0', 'This is a new Release Notes', now(), now(), '2021-11-21 00:00:00');

CALL sp_content_del(1);

CALL sp_fraudmanagement_sel();

CALL `sp_applications_del`(2);

CALL sp_users_sel() ;

CALL sp_bookmarks_sel_user(2);

CALL sp_users_ins('Roman', 'Kvaska', 'roman.kvaska@gmail.com', now(), now() ) ;

CALL sp_users_del(3);

CALL `sp_applications_upd`(1,'AlphaOil Petronas','alphaoil',now());

CALL `sp_faq_ins`(1, 'Question apa', 'Answer apa', true, now(), now());

CALL `sp_faq_sel`();

CALL `sp_feedback_sel_user`();

CALL sp_notifications_del(2);

CALL sp_notifications_sel();

CALL sp_bookmarks_ins(2, 'helpx.petronas.com/releasenote/1.11', 'Release Note 1.11', now(), now());

CALL sp_bookmarks_upd('Release Note 1.11 Extra', 2, now());

CALL sp_bookmarks_del(2);

CALL sp_contentfiles_ins(1, 'img/Notes2/22015.png', now(), now());

CALL `sp_lookupuserroles_sel`();

CALL `sp_lookupuserroles_ins`(6, 'Admin App', 'have an eye for detail', now(), now()) ;