module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@stores": "./src/stores",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@types": "./src/types",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@assets": "./src/assets/",
            "@constants": "./src/constants",
          },
        },
      ],
    ],
  };
};
