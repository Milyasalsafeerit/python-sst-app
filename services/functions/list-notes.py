import json

def lambda_handler(event, context):
  return {
    "statusCode": 200,
    "body": json.dumps({"id1": {
          "noteId":    "id1",
          "userId":    "user1",
          "content":   str([1,2,3,4]),
      }},indent=2)
  }