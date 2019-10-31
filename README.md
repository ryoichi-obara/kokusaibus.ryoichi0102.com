# kokusaibus.ryoichi0102.com

```s3-sync.sh
aws s3 sync .\ s3://your-bucket-here/ --delete --exact-timestamps --exclude .gitignore --exclude .DS_Store --exclude README.md --exclude LICENSE --exclude s3-sync.bat --exclude '.git/*'
```

```s3-sync.bat
aws s3 sync .\ s3://your-bucket-here/ --delete --exact-timestamps --exclude .gitignore --exclude .DS_Store --exclude README.md --exclude LICENSE --exclude s3-sync.bat --exclude ".git/*" --profile your-profile-here
```
