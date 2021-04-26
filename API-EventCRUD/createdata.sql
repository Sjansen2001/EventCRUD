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
)
    WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) 
ON [PRIMARY]

INSERT INTO dbo.events
(eventTitle, eventDescription, startDate, endDate, avenue, maxMembers)
VALUES ('test', 'test', '01-01-2021', '02-02-2021', 'test', '420');