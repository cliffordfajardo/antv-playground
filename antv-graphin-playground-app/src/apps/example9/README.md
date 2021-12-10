# Example 9

This example is just testing if deleting an item inside the `graph` auto updates the canvas.

```
  const { graph } = React.useContext(GraphinContext);
  // @ts-ignore
  window.graph = graph;
```

Then in the chrome developer tools:
```
  graph.cfg.edges = [];
```
This deletes the edges array, but the canvas doesn't get updated.
The reason is the data has already been painted on the canvas.
Recall, the `canvas` is just a object where you can paint pixels.

If you want the Graphin canvas to update, we need to `<Graphin>`
component to re-render with the update data so it repaints
the canvas.


The answer is no.