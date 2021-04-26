Event CRUD:

Frontend = Angular 11,

Backend = Node.js/express.js,

Database = Microsoft SQL Server Management Studio

Change .env file to your information

1. Clone the repository
2. CD APP-EventCRUD
3. npm install
4. npm start
5. Open new terminal
6. CD API-EventCRUD
7. npm install
8. npm start

--------------------------------------------------------

Create database eventmanagement

CREATE TABLE [dbo].[events](
	[eventId] [int] IDENTITY(1,1) NOT NULL,
	[eventTitle] [nvarchar](100) NOT NULL,
	[eventDescription] [nvarchar](1500) NOT NULL,
	[startDate] [date] NOT NULL,
	[endDate] [date] NOT NULL,
	[avenue] [nvarchar](200) NOT NULL,
	[maxMembers] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[eventId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
