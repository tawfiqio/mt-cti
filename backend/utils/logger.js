const chalk = require('chalk');

const info = (msg) => {
  console.log(chalk.cyan(`[MT-CTI INFO] ${msg}`));
};

const warn = (msg) => {
  console.warn(chalk.yellow(`[MT-CTI WARNING] ${msg}`));
};

const error = (msg) => {
  console.error(chalk.red(`[MT-CTI ERROR] ${msg}`));
};

module.exports = { info, warn, error };
