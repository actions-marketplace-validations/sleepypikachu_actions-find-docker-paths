# actions-path-to-docker-image-name
[GitHub Action](https://github.com/features/actions) to find directory paths with a Dockerfile (optionally filtered by a list of changes)

## Example
```yaml
- uses: sleepypikachu/actions-find-docker-paths@v1.0.0
  id: find-docker-paths
  with:
    path: foo
```

With filter:
```yaml
- uses: sleepypikachu/actions-find-docker-paths@v1.0.0
  id: find-docker-paths
  with:
    changes: '["./foo/bar/baz/init.sh", "./foo/bar/baz/x.js", "./foo/bar/jag/init.sh"]'
```


