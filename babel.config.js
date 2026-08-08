const presets = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.50.0',
      },
    ],
  ],
};

export default presets;
