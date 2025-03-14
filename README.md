# Online Code Compiler(NitishCodeCompiler)
![Screenshot 2025-02-28 160747](https://github.com/user-attachments/assets/1af474b9-d952-4a46-907a-7f00b23fbb4e)

This project is a simple **online code compiler** built using **Node.js, Express, and Compilex**. It allows users to write and execute code in **C++, Java, and Python** directly from a web interface.

## Features
- Supports **C++, Java, and Python** code execution
- Accepts user input for programs that require it
- Runs code securely with **timeout restrictions**
- Uses `compilex` for compiling and executing code

## Technologies Used
- **Node.js** (Backend)
- **Express.js** (Server)
- **Compilex** (Code compilation and execution)
- **Body-Parser** (Parsing incoming request bodies)
- **HTML, CSS, JavaScript** (Frontend)

## Installation
### Prerequisites
Make sure you have **Node.js** installed. You can download it from [Node.js Official Website](https://nodejs.org/).

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/NitishKumar1123/NitishCodeCompiler.git
   cd NitishCodeCompiler
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node app.js
   ```
4. Open your browser and visit:
   ```
   https://nitishcodecompiler.netlify.app/
   ```

## API Endpoints
### **Compile Code**
**POST** `/compile`
#### Request Body (JSON):
```json
{
  "code": "#include <iostream>\nusing namespace std;\nint main() { cout << 'Hello, World!'; return 0; }",
  "input": "",
  "lang": "Cpp"
}
```
#### Response:
```json
{
  "output": "Hello, World!",
  "errors": ""
}
```

## Project Structure
```
/NitishCodeCompiler
│── /codemirror-5.65.18        # Contains frontend static files
│── /node_modules              # HTML and template files
│── Api.js                     # Express.js route handlers
│── index.html                 # Main backend logic
│── package-lock.json          # Project dependencies
│── package.json
│── README.md                  # Project documentation
```

## Security Considerations
⚠️ **Warning:** This project allows arbitrary code execution, which can be **dangerous**.

To improve security:
- Use **Docker containers** or an external service like [Judge0](https://judge0.com/).
- Implement **resource limits** (CPU, memory, execution time) in `compilex`.

## License
This project is licensed under the **MIT License**. Feel free to use and modify it!

## Contributing
Feel free to fork this repository and submit a pull request with improvements! 🚀

