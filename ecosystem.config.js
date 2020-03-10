module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'allen_personal_resume',
      script    : 'server.js',
      env: {
        NODE_ENV: "development",
        COMMON_VARIABLE: 'true'
      },
      env_staging : {
        NODE_ENV: 'staging',
        PORT: 8090,
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 8090,
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "49.232.45.250",
      ref  : "origin/production",
      repo : "git@gitee.com:xiaofa18/allen_personal_resume.git",
      path : "/home/deployer/apps/allen_personal_resume",
      ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "cnpm install && NODE_ENV=production cnpm run build",
      env  : {
        NODE_ENV: "production",
      }
    },
    staging : {
      user : "root",
      host : "49.232.45.250",
      ref  : "origin/dev",
      repo : "git@gitee.com:xiaofa18/allen_personal_resume.git",
      path : "/home/deployer/apps/allen_personal_resume",
      ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "cnpm icdnstall && NODE_ENV=staging cnpm run build",
      env  : {
        NODE_ENV: "staging",
      }
    },
    test : {
      user : "root",
      host : "49.232.45.250",
      ref  : "origin/dev",
      repo : "git@gitee.com:xiaofa18/allen_personal_resume.git",
      path : "/home/deployer/apps/allen_personal_resume",
      ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      // "post-deploy" : "cnpm install && NODE_ENV=staging cnpm run build && pm2 startOrRestart ecosystem.config.js server.js --name youka_search",
      "post-deploy" : "cnpm install && NODE_ENV=staging cnpm run build",
      env  : {
        NODE_ENV: "staging",
      }
    }
  }
};
