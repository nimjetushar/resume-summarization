import * as Excel from 'exceljs';
import express from 'express';
import path from 'path';
import { CandidateEntity } from './type';
const cors = require('cors');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();
app.use(cors('*'));

app.get('/', (req, res) => {
  res.send({ message: 'hello' });
});

app.get('/api/candidates/load/all', async (req, res) => {
  const workbook = new Excel.Workbook();
  const dirPath = path.join(
    __dirname,
    '../../../../summarization/candidate_data.xlsx'
  );
  const wb = await workbook.xlsx.readFile(dirPath);
  const worksheet = wb.getWorksheet('Sheet1');

  const candidateData: CandidateEntity[] = [];

  worksheet.eachRow({ includeEmpty: true }, (row) => {
    const value = row.values;
    candidateData.push({
      name: value[1],
      gender: value[2],
      email: value[3],
      contactNumber: value[4],
      summary: value[5],
      yearOfExperience: value[6],
      skills: value[7],
      companyWorkedFor: value[8],
    });
  });

  res.send({ data: candidateData });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
