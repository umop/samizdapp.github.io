---
sidebar_position: 3
---

# Doesn't balenaCloud make SamizdApp centralized?

balenaCloud _is_ a centralized service; however, SamizdApp only uses it for
deployments. This results in a deployment environment that is centralized and a
runtime environment that is *de*centralized.

If balenaCloud were to fail, all devices currently on the network would
continue to function with no change in behavior. However, until an alternative
was set up, existing devices would be unable to receive software updates and
new devices would be unable to join the network.
