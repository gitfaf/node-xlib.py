# node-xlib.py @V2.0.1

node module for python xlib: xlib.py

## Usage

NOTE: Use version 2+

```bash
    # -S is --save; use -D or --save-dev if it is a dev dependency
    npm i -S xlib.py

    # using in example.js
    const xlib_py = require('xlib.py')

    for(let {key, value} of xlib_py.zip([0, 1, 2, 3], [10, 'a', 20, 0])) {
        console.log(key, value);
    }
    // prints
    // 0 1
    // 1 'a'
    // 2 20
    // 3 0
```

## Development

```bash
    git clone git@github.com:gitfaf/node-xlib.py.git
    cd node-xlib.py
    npm i

    # If jasmine is required to be in global
    npm i -g jasmine

    # test
    jasmine
```

Please `rebase` instead of `merge` i.e. `git pull --rebase` always!

## License

MIT &copy; Git Faf 2017
