
# BookShelf API - Back-End
The BookShelf API is a robust back-end application designed to manage a virtual bookshelf. This API allows users to perform a variety of operations related to book management, including adding new books, retrieving book details, updating existing book information, and deleting books from the collection. It supports querying based on various parameters such as book title, reading status, and completion status.

## Features
### 1. The API can save books (addBookHandler)
The API can save books through the route:
- Method : POST
- URL : /books
- Body Request (JSON):
```bash
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```
The book object stored on the server has a structure like the example below,
```bash
    {
    "id": "Qbax5Oy7L8WKf74l",
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "C Programming",
    "pageCount": 100,
    "readPage": 25,
    "finished": false,
    "reading": false,
    "insertedAt": "2021-03-04T09:11:44.598Z",
    "updatedAt": "2021-03-04T09:11:44.598Z"
}
```
### 2. The API can display all books (getAllBooksHandler)
The API can display all books stored through the route:
- Method : GET
- URL : /books
The server returns a response with:
- Status code : 200
- Response body :
```bash
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "Qbax5Oy7L8WKf74l",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "1L7ZtDUFeGs7VlEt",
                "name": "Buku B",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "K8DZbfI-t3LrY7lD",
                "name": "Buku C",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```
If no books have been added, the server responds with an empty books array.
``` bash
{
    "status": "success",
    "data": {
        "books": []
    }
}
```
### 3. The API can display detail book (getBookByIdHandler)
The API can display all stored books through the route:
- Method : GET
- URL : /books/{bookId}
If the book with the id provided by the client is not found, the server returns a response with:
``` bash
- Status code : 404
- Response body :
{
    "status": "fail",
    "message": "Buku tidak ditemukan"
}
```
If the book with the provided id is found, the server returns a response with:
``` bash
- Status code : 200
- Response body :
{
    "status": "success",
    "data": {
        "book": {
            "id": "aWZBUW3JN_VBE-9I",
            "name": "Buku A Revisi",
            "year": 2011,
            "author": "Jane Doe",
            "summary": "Lorem Dolor sit Amet",
            "publisher": "Erlangga",
            "pageCount": 200,
            "readPage": 26,
            "finished": false,
            "reading": false,
            "insertedAt": "2021-03-05T06:14:28.930Z",
            "updatedAt": "2021-03-05T06:14:30.718Z"
        }
    }
}
```
### 4. The API can update book data (editBookByIdHandler)
The API can update book data based on the id through the route:
- Method : PUT
- URL : /books/{bookId}
- Body Request :
``` bash
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```
The server responds with a failure if:
1. The client does not include the name property in the request body. In this case, the server responds with:
- Status code : 400
- Response body : 
``` bash
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```
2. The client includes a value for the readPage property that is greater than the value of the pageCount property. In this case, the server responds with:
- Status code : 400
- Response body :
``` bash
{
    "status": "fail",
    "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
``` 
3. The id provided by the client is not found by the server. In this case, the server responds with:
- Status code : 400
- Response body : 
``` bash
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
``` 

If the book is successfully updated, the server returns a response with:
- Status code : 400
- Response body : 
``` bash
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
}
``` 
### 5. The API can delete a book (deleteBookByIdHandler)
The API can delete a book based on its id through the following route:
- Method : DELETE
- URL : /books/{bookId}
If the id provided does not belong to any book, the server returns the following response:
- Status code :  404
- Response body : 
``` bash
{
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```
If the id belongs to a book, the book is deleted and the server returns the following response:
- Status code :  200
- Response body : 
``` bash
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```

## Authors

- [@WinfreyNainggolan01](https://github.com/WinfreyNainggolan01)


