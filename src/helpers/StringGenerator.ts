import * as core from '@actions/core';
async function main() {
    const dummyString: string = String('Dummy Text');
    core.setOutput('DUMMY_VALUE_CREATED_BY_TYPESCRIPT_CODE', dummyString);
}
main();