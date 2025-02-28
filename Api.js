const express = require("express")
const app = express()
const bodyP = require("body-parser")
// init() creates a folder named temp in your project directory which is used for storage purpose. Before using other methods , make sure to call init() method.
const compiler = require("compilex")
const options = { stats: true } //prints stats on console
compiler.init(options)

app.use(bodyP.json())

app.use("/codemirror-5.65.18", express.static("C:/Users/asus/Downloads/COMPILER/codemirror-5.65.18"))

app.get("/", function (req, res) {
    compiler.flush(function(){
        console.log("deleted")
    })
    res.sendFile("C:/Users/asus/Downloads/COMPILER/index.html")
})
// create API and end named as compile
app.post("/compile", function (req, res) {
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    try {

        //give option for all three language
        if (lang == "Cpp") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows", cmd: "g++", options:{timeout:1000} }; // (uses g++ command to compile )
                //else
                // var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                    //data.error = error message 
                    //data.output = output value
                });

                //res is the response object
            }
            else {
                //if windows  
                var envData = { OS: "windows", cmd: "g++",options:{timeout:1000} }; // (uses g++ command to compile )
                //else
                var envData = { OS: "linux", cmd: "gcc" }; // ( uses gcc command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" }; // (Support for Linux in Next version)
                compiler.compileJava(envData, code, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" }; // (Support for Linux in Next version)
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            //you can add more..............
        }
        else if(lang== "Python") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" };
                compiler.compilePython(envData, code, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                //else
                // var envData = { OS: "linux" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    //if data not present then handle it
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
    }
    catch (e) {
        console.log("error")
    }

})

app.listen(8000)
