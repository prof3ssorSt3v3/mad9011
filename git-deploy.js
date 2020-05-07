const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);
let message = args.join(' ');

exec('git add .', (err, sdout, sdin) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(sdout);
  exec(`git commit -m "${message}"`, (err, sdout, sdin) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(sdout);
    exec('git push origin master', (err, sdout, sdin) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(sdout);
      exec(`deploy.sh`, (err, sdout, sdin) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(sdout);
      });
    });
  });
});
