{
    "logLevel": "debug",
    "logColors": true,

    "cliPort": 17117,

    "clustering": {
        "enabled": true,
        "forks": "auto"
    },

    "defaultPoolConfigs": {
        "blockRefreshInterval": 1000,
        "jobRebroadcastTimeout": 55,
        "connectionTimeout": 600,
        "emitInvalidBlockHashes": false,
        "validateWorkerUsername": true,
        "tcpProxyProtocol": false,
        "banning": {
            "enabled": true,
            "time": 600,
            "invalidPercent": 50,
            "checkThreshold": 500,
            "purgeInterval": 300
        },
        "redis": {
            "host": "127.0.0.1",
            "port": 6379,
            "db": 0,
            "password": ""
        }
    },

    "website": {
        "enabled": true,
        "host": "0.0.0.0",
        "siteTitle": "YENTEN POOL",
        "port": 80,
        "stratumHost": "stratum1.altnuts.com",
        "stats": {
            "updateInterval": 60,
            "historicalRetention": 43200,
            "hashrateWindow": 300,
            "graphColors": ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5", "#64E572",
            "#FF9655", "#FFF263", "#6AF9C4"]
        },
        "adminCenter": {
            "enabled": true,
            "password": "password"
        }
    },

    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "db": 0,
        "password": ""
    },

    "switching": {
        "switch1": {
            "enabled": false,
            "algorithm": "sha256",
            "ports": {
                "3333": {
                    "diff": 10,
                    "varDiff": {
                        "minDiff": 16,
                        "maxDiff": 512,
                        "targetTime": 15,
                        "retargetTime": 90,
                        "variancePercent": 30
                    }
                }
            }
        },
        "switch2": {
            "enabled": false,
            "algorithm": "scrypt",
            "ports": {
                "4444": {
                    "diff": 10,
                    "varDiff": {
                        "minDiff": 16,
                        "maxDiff": 512,
                        "targetTime": 15,
                        "retargetTime": 90,
                        "variancePercent": 30
                    }
                }
            }
        },
        "switch3": {
            "enabled": false,
            "algorithm": "x11",
            "ports": {
                "5555": {
                    "diff": 0.001,
                    "varDiff": {
                        "minDiff": 0.001,
                        "maxDiff": 1,
                        "targetTime": 15,
                        "retargetTime": 60,
                        "variancePercent": 30
                    }
                }
            }
        },
        "switch4": {
            "enabled": true,
            "algorithm": "yescriptr16",
            "ports": {
              "6666": {
                "diff": 1,
                "varDiff": {
                  "minDiff": 0.001,
                  "maxDiff": 1,
                  "targetTime": 15,
                  "retargetTime": 60,
                  "variancePercent": 30
                }
              }
            }
        }
    },

    "profitSwitch": {
        "enabled": false,
        "updateInterval": 600,
        "depth": 0.90,
        "usePoloniex": true,
        "useCryptsy": true,
        "useBittrex": true
    }
}
