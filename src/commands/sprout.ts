import { Arguments, CommandBuilder } from "yargs";

type Options = {
  type: string;
  name: string;
};

export const command: string = "sprout <type> <name>";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional("type", { type: "string", demandOption: true, default: "web" })
    .positional("name", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { type, name } = argv;
  process.stdout.write(`creating ${type} with name ${name}`);
  process.exit(0);
};
