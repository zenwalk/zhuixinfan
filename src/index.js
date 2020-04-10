const {Command, flags} = require('@oclif/command')
const {fetch} = require('./fetch')

class ZhuixinfanCommand extends Command {
  async run() {
    const {args} = this.parse(ZhuixinfanCommand)
    const pid = args.pid

    // this.log(`hello ${pid} from ./src/index.js`)
    fetch(pid)
  }
}

ZhuixinfanCommand.description = `Describe the command here
...
Extra documentation goes here
`

ZhuixinfanCommand.args = [{name: 'pid', required: true, parse: input => Number(input)}]

ZhuixinfanCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
}

module.exports = ZhuixinfanCommand
