const info = {
  name: 'JavaScript',
  company: 'Netscape',
  owner: 'Brendan Eich',
  engine: {
    name: ['V8-Engine - Chrome', 'Spider Manky - Mozilla', 'Chakra - microsoft-edge']
  }
}

// const { owner } = info;
// const { owner : founderOfJS } = info;
const { name } = info.engine;
console.log(name);