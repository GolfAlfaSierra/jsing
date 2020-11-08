( () => {

    const passwd = ``;
    const login = ``;
    let limit = 0;

    const fs = require('fs');
    let archive_ids;

    let textBuff = fs.readFileSync('./isbns.txt', 'utf-8');
    archive_ids = String(textBuff);
    
    // console.log(archive_ids, 'idss');
    archive_ids = archive_ids.split(',');


    console.log(archive_ids, ' archive_ids');
    for (id of archive_ids) {
         pyscript(id, login, passwd);
        limit += 1;
        if (limit === 10) { break; }
    }


    console.log('wooow');

    return 'OK';
})() //START

/**
 * @param {string} archive_id
 * @param {string} login
 * @param {string} pass
 */
 async function pyscript(archive_id, login, pass) {
    const py = require('python-shell');
    const fs = require('fs');

    py.PythonShell.run(`safaribooks.py`, { 
        pythonOptions: [`-u`],
        args: [`--cred`, `${login}:${pass}`, `${archive_id}`], 
        scriptPath: "C:\\Users\\" //path to python book loader

    }, (err, out) => {
        if (err) throw err;
        console.log('finished ', archive_id);
        fs.appendFile('datalogs.txt', stringPrefixer(out, '', ''), null, (err) => {
            if (err) throw err;
            console.log('one file added')
        })
    })
}

function stringPrefixer(data, atStart, atEnd) {
    atStart = '\n========================================================================================================================'.concat(atStart);
    atEnd = '\n========================================================================================================================'.concat(atEnd);
    return `${atStart}${data}${atEnd}`
}


