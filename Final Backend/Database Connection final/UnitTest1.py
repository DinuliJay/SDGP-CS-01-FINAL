import unittest
from unittest.mock import MagicMock, patch
from app import app 


class TestApiHandler(unittest.TestCase):
    @patch('app.mysql_connection')
    def test_get(self, mock_mysql_connection):
        # Mocking the cursor and its execute method
        mock_cursor = MagicMock()
        mock_cursor.fetchall.return_value = [(1, 'Question 1', 'Answer 1'), (2, 'Question 2', 'Answer 2')]
        mock_mysql_connection.cursor.return_value = mock_cursor

        # Making a test client for the Flask app
        with app.test_client() as client:
            # Sending a GET request to the endpoint
            response = client.get('/flask')

            # Asserting the status code
            self.assertEqual(response.status_code, 200)

            # Asserting the response data
            data = response.get_json()
            self.assertEqual(data['resultstatus'], 'SUCCESS')
            self.assertEqual(data['message'], 'Questions and Answers fetched successfully')
            self.assertEqual(len(data['data']), 2)  # Assuming 2 rows are fetched

            # Asserting the content of the first row
            self.assertEqual(data['data'][0]['id'], 1)
            self.assertEqual(data['data'][0]['Question'], 'Question 1')
            self.assertEqual(data['data'][0]['Answer'], 'Answer 1')

            # Asserting the content of the second row
            self.assertEqual(data['data'][1]['id'], 2)
            self.assertEqual(data['data'][1]['Question'], 'Question 2')
            self.assertEqual(data['data'][1]['Answer'], 'Answer 2')

    @patch('app.mysql_connection')
    def test_get_exception(self, mock_mysql_connection):
        # Mocking the cursor and its execute method to raise an exception
        mock_cursor = MagicMock()
        mock_cursor.execute.side_effect = Exception('Database connection error')
        mock_mysql_connection.cursor.return_value = mock_cursor

        with app.test_client() as client:
            response = client.get('/flask')
            self.assertEqual(response.status_code, 200)  # Still expecting 200 for any exceptions
            data = response.get_json()
            self.assertEqual(data['resultstatus'], 'ERROR')
            self.assertEqual(data['message'], 'Database connection error')


if __name__ == '__main__':
    unittest.main()
