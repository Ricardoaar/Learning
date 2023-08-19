const serializer = (args = []) => {
  return args.map(arg => arg.split(""));
};
module.exports = serializer;