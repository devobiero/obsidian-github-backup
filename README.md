# Backup static files to Github
A command line tool that can be scheduled to backup static files e.g obsidian markdown files to private GitHub repositories

### Usage
* Create an empty **PRIVATE** repository on Github
* Copy the link of the repository
* Install `obsidian-github-backup` tool

Using `npm`
```bash
npm install -g  @devobiero/obisidian-github-backup@latest
```

Using `yarn`
```bash
yarn global add  @devobiero/obisidian-github-backup@latest

```

* Verify the installation by running:

`obsidian-github-backup --dir=/path/to/files --remote=/git/remote/url`

* Create a backup script called `backup.sh` that can be run by a crontab

* Make the file executable `chmod +x backup.sh` 

* Schedule the backup via crontab:
    * Run in your terminal:

        `sudo env EDITOR=nano crontab -u $(whoami) -e`

    * Paste below content to schedule the backups every hour
    ```bash
    # Runs every 1 hour
    
    0 * * * * ./backup.sh >> /tmp/obsidian-github.log 2>&1

    ```
* Occasionally check `/tmp/obsidian-github.log` for debugging output