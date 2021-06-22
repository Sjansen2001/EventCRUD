SELECT [eventId]
      ,[eventTitle]
      ,[eventDescription]
      ,[startDate]
      ,[endDate]
      ,[avenue]
      ,[maxMembers]
  FROM [dbo].[events]
  ORDER BY eventId
  OFFSET @offset ROWS
  FETCH NEXT @limit ROWS ONLY