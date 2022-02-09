import { RouteHandler } from "@layer0/core/router/Router";
import { HTTP_HEADERS } from "@layer0/core";

const noCacheHandler: RouteHandler = ({
    removeUpstreamResponseHeader,
    updateResponseHeader,
    updateUpstreamResponseHeader,
    proxy,
}) => {
    removeUpstreamResponseHeader(HTTP_HEADERS.setCookie); // The presence of a set-cookie header would prevent the response from being cached, so ensure set-cookie headers are removed.
    updateResponseHeader(HTTP_HEADERS.location, /(https:\/\/)?(www)\.lushusa\.com\//gi, '/');
    updateUpstreamResponseHeader(HTTP_HEADERS.location, /(https:\/\/)?(www)\.lushusa\.com\//gi, '/');
    proxy("origin", {
        path: "/:path*" // cut prefix
    });
};

export default noCacheHandler;
