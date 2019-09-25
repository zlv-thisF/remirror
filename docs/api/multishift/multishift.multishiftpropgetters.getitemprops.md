<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [multishift](./multishift.md) &gt; [MultishiftPropGetters](./multishift.multishiftpropgetters.md) &gt; [getItemProps](./multishift.multishiftpropgetters.getitemprops.md)

## MultishiftPropGetters.getItemProps() method

Get the augmented props for each item being rendered.

<b>Signature:</b>

```typescript
getItemProps<GElement extends HTMLElement = any, GRefKey extends string = 'ref'>(options: GetItemPropsOptions<GElement, GRefKey, GItem>): GetPropsWithRefReturn<GElement, GRefKey>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | <code>GetItemPropsOptions&lt;GElement, GRefKey, GItem&gt;</code> |  |

<b>Returns:</b>

`GetPropsWithRefReturn<GElement, GRefKey>`

## Remarks

The props returned from calling this function should be applied to any menu items you render.

This is an impure function, so it should only be called when you will actually be applying the props to an item.
