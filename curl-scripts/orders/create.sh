API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "itemName": "'"${NAME}"'",
      "itemPrice": "'"${PRICE}"'"
    }
  }'

echo