// const resultModelSchema = require("../models/resultModel");


// const postResults = async (req, res) => {
    
//     console.log(req.file);
//     const title = req.body.title;
//     const semester = req.body.semester;
//     const course = req.body.course;
//     const filename = req.file.filename;
    
//     try {
//         await resultModelSchema.create({title : title, semester: semester,
//              course: course, pdf : filename});
//              res.send({status: "ok"});
//     } catch (error) {
//         res.json({status: error})
//     }
// };

// const getResults = async (req, res) => {
//     try {
//         resultModelSchema.find({}).then((el) => {
//             res.send({status: "ok", data: el});
//         })
//     } catch (error) {
//         res.json({status: error});
//     }
// }

// module.exports = {postResults, getResults};