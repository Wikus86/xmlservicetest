import { Connection, ProgramCall } from 'itoolkit';

const connection = new Connection({
  transport: 'ssh', // if odbc, no java works, java crash, set to ssh, xmloutput is '/n' and java crash
  transportOptions: {
    database: '*LOCAL',
    host: '',
    username: '',
    password: '',
  },
});

// Set up the program variables
const pgmName = 'TSTPGM';
const library = '';

// Create a program call
const program = new ProgramCall(`${pgmName}`, {
  lib: `${library}`,
  error: 'on',
});

const action = {
  name: 'action',
  io: 'in',
  type: '10A',
  value: '', // JAVA to test java , blank to test normal
};

const rtnMsg = {
  name: 'action',
  io: 'out',
  type: '10A',
  value: '',
};

program.addParam(action);
program.addParam(rtnMsg);

connection.add(program);

// Call the program
connection.run((error, xmlOutput) => {
  // See if there were errors
  if (error) {
    console.log(error);
  }

  console.log(xmlOutput);
});
